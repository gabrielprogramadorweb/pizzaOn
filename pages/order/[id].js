import Layout from "../../components/Layout";
import { client } from "../../lib/client"
import css from '../../styles/Order.module.css'
import { UilBill, UilBox } from '@iconscout/react-unicons'
import Image from "next/image";
import Cooking from '../../assets/cooking.png'
import Onway from '../../assets/onway.png'
import Spinner from '../../assets/spinner.svg'
import { useEffect } from "react";


export const getServerSideProps = async ({ params }) => {
    const query = `*[_type == 'order' && _id == '${params.id}']`;
    const order = await client.fetch(query);

    return {
        props: {
            order: order[0]
        }
    }
}

export default function Orders({ order }) {
    useEffect(() => {
        if (order.status > 3) {
            localStorage.clear();
        }
    }, [order])
    return (
        <Layout>
            <div className={css.container}>
                <span className={css.heading}>
                    Pedido em processo
                </span>
                <div className={css.details}>
                    <div>
                        <span>Id Pedido</span><span>
                            {order._id}</span></div>
                    <div>
                        <span>Nome do cliente</span>
                        <span>{order.name}</span>
                    </div>
                    <div>
                        <span>Contato</span>
                        <span>{order.phone}</span>
                    </div>
                    <div>
                        <span>Método de pagamento</span>
                        <span>{order.method == 0 ? 'Pagamento Online' : 'Pagamento na entrega'}</span>
                    </div>
                    <div>
                        <span>Total</span>
                        <span>R$ {order.total}</span>
                    </div>
                </div>
                <div className={css.statusContainer}>
                    <div className={css.status}>
                        <UilBill width={50} height={50} />
                        <span>Pagamento</span>
                        {order.method === 0 ?
                            <span className={css.completed}>Concluido</span> :
                            <span className={css.pending}>Na entrega</span>
                        }
                    </div>

                    <div className={css.status}>
                        <Image src={Cooking} alt="" width={50} height={50} />
                        <span>Cozinha</span>

                        {order.status === 1 && (
                            <div className={css.spinner}>
                                <Image src={Spinner} alt='' />
                            </div>

                        )}
                        {order.status > 1 && (
                            <span className={css.completed}>Concluído</span>
                        )}
                    </div>

                    <div className={css.status}>
                        <Image src={Onway} alt="" width={50} height={50} /><span>Trajeto</span>
                        {order.status === 2 && (
                            <div className={css.spinner}>
                                <Image src={Spinner} alt='' />
                            </div>
                        )}
                        {order.status > 2 && (
                            <span className={css.completed}>Concluído</span>
                        )}
                    </div>
                    <div className={css.status}>
                        <UilBox width={50} height={50} />
                        <span>Entregue</span>
                        {order.status === 3 && (
                            <div className={css.spinner}>
                                <Image src={Spinner} alt='' />
                            </div>
                        )}
                        {order.status > 3 && (
                            <span className={css.completed}>Concluído</span>
                        )}
                    </div>
                </div>
            </div>

        </Layout>
    )
}