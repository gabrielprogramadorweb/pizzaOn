import Image from "next/image"
import css from "../styles/Hero.module.css"
import Cherry from "../assets/Cherry.png"
import HeroImage from "../assets/HeroImage.png"
import { UilPhone } from '@iconscout/react-unicons'
import Pizza1 from '../assets/p1.jpg'

export default function Hero() {
  const scroll = () => {
    window.scrollBy(800, 1300);
  }
  return (

    <div className={css.container}>
      {/*Left side */}
      <div className={css.left}>

        <div className={css.cherryDiv}>
          <span><button className="btn" onClick={scroll}>Acesse nosso Cardápio</button></span>
          {/** <Image src={Cherry} alt="" width={40} height={25} />*/}
        </div>


        <div className={css.heroText}>
          <span>Na compra de </span>
          <span>Uma Pizza Você </span>
          <span>
            <span style={{ color: "var(--themeRed)" }}>Ganha Outra</span>
          </span>
        </div>


        <span className={css.miniText}>
          Nossa missão é encantar
        </span>

        {/**<button className={`'btn', ${css.btns}`}>
          Vamos começar
  </button>}*/}
      </div>
      {/*Right side */}
      <div className={css.right}>
        <div className={css.imageContainer}>
          <Image src={HeroImage} alt="" layout="intrinsic" />
        </div>
        <div className={css.ContactUs}>
          <span>Contato</span>
          <div>
            <UilPhone color='white' />
          </div>
        </div>
        <div className={css.Pizza}>
          <div>
            <Image src={Pizza1} alt="" objectFit="cover" layout="intrinsic" />
          </div>

          <div className={css.details}>
            <span>Pizza Italiana </span>
            <span style={{ color: "var(--themeRed)" }}>R$</span>
            <span>40,00</span>

          </div>

        </div>
      </div>
    </div>
  )
};


