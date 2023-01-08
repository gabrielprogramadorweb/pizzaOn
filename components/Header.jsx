import Image from 'next/image';
import styles from '../styles/Header.module.css';
import Logo from '../assets/Logo.png';
import { UilShoppingBag, UilReceipt } from '@iconscout/react-unicons';
import { useStore } from '../store/store';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Menu from './Menu';



export default function Header
  () {
  const [Order, setOrder] = useState('');
  useEffect(() => {
    setOrder(localStorage.getItem("order"));
  }, [])

  const items = useStore((state) => state.cart.pizzas.length)

  return (
    <div className={styles.header}>
      {/* logo side */}
      <div className={styles.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <Link href='./'><span>OnPizza</span></Link>
      </div>

      {/*Menu side*/}
      <ul className={styles.menu}>
        <li>
          <Link href="../">Home</Link>
        </li>
        <Link href='./Menu'>Menu</Link>
        <li>Contato</li>
      </ul>

      {/*rigt side*/}
      <div className={styles.rightSide}>
        <Link href='/cart'>
          <div className={styles.cart}>
            <UilShoppingBag size={35} color="#2e2e2e" />
            <div className={styles.badge}>{items}</div>
          </div>
        </Link>

        {Order && (
          <Link href={`/order/${Order}`}>
            <div className={styles.cart}>
              <UilReceipt size={35} color="#2E2E2E" />
              {Order != "" && <div className={styles.badge}>1</div>}
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
