import css from '../styles/Footer.module.css';
import { UilFacebook, UilGithub, UilInstagram } from '@iconscout/react-unicons';
import Image from 'next/image';
import Logo from '../assets/Logo.png';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={css.container}>
      <span>Todos os direitos reservados</span>
      <div className={css.social}>

        <Link href="https://github.com/gabrielprogramadorweb/"><UilGithub size={45} /></Link>
        <UilInstagram size={45} />
      </div>
      {/* logo side */}
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>OnPizza</span>
      </div>
    </div>
  );
}
