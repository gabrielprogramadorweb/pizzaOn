import Image from 'next/image'
import Link from 'next/link';
import { urlFor } from '../lib/client';
import css from '../styles/Menu.module.css'


export default function Menu({ pizzas }) {
    //console.log(pizzas)
    return (
        <div className={css.container}>
            <div className={css.heading}>
                <span>Nosso Menu</span>
                <span>Cardápio que vai</span>
                <span>Fazer você se apaixonar</span>
            </div>

            <div className={css.menu}>
                {/* Pizzas */}

                {pizzas.map((pizza, id) => {
                    const src = urlFor(pizza.image).url()
                    return (
                        <div className={css.pizza} key={id}>

                            <Link href={`./pizza/${pizza.slug.current}`}>

                                <div className={css.ImageWrapper}>
                                    <Image
                                        loader={() => src}
                                        src={src} alt="" objectFit='cover' layout='fill' />
                                </div>
                            </Link>
                            <span>{pizza.name}</span>
                            <span> <span style={{ color: 'var(--themeRed)' }}>R$ </span>{pizza.price[1]}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
