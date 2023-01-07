import css from '../styles/Services.module.css'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import Image from 'next/image'
export default function Services() {
    return (
        <>
            <div className={css.heading}>
                <span>Ótimo sabor</span>
                <span>Preço baixo</span>
                <span>Entrega veloz</span>

            </div>

            {/*Feature*/}
            <div className={css.services}>




                <div className={css.feature}>
                    <div className={css.ImageWrapper}>
                        <Image src={s1} alt="" objectFit='cover' layout='intrinsic' />
                    </div>
                    <span>
                        Fácil de pedir</span>
                    <span>Tudo na palma de sua mão</span>
                </div>

                <div className={css.feature}><div className={css.ImageWrapper}>
                    <Image src={s2} alt="" objectFit='cover' layout='intrinsic' />
                </div>
                    <span>Entrega segura</span>
                    <span>Custo baixo</span>

                </div>

                <div className={css.feature}><div className={css.ImageWrapper}>
                    <Image src={s3} alt="" objectFit='cover' layout='intrinsic' />
                </div>
                    <span>Melhor pizzaria da Cidade</span>
                    <span>Não apenas rápido, a qualidade também é o nosso ponto forte</span>
                </div>

            </div>
        </>
    )
};
