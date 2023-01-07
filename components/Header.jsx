import Image from 'next/image';
import styles from '../styles/Header.module.css';
import Logo from '../assets/Logo.png';
import { UilShoppingBag } from '@iconscout/react-unicons';
import { useStore } from '../store/store';
import Link from 'next/link';


export default function Header
  () {
  //state in terminal
  const state = useStore((state) => state)
  console.log(state);
  const items = useStore((state) => state.cart.pizzas.length)
  return (
    <div className={styles.header}>
      {/* logo side */}
      <div className={styles.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>Fudo</span>
      </div>

      {/*Menu side*/}
      <ul className={styles.menu}>
        <li>Home</li>
        <li>Menu</li>
        <li>Contato</li>
      </ul>

      {/*rigt side*/}
      <div className={styles.rightSide}>
        <Link href='/cart'>
          <div className={styles.cart}>
            <UilShoppingBag className={styles.cart} size={35} color="#2e2e2e" />
            <div className={styles.badge}>{items}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
