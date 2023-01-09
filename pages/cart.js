import { useStore } from "../store/store";
import Layout from "../components/Layout";
import { urlFor } from "../lib/client";
import css from '../styles/Cart.module.css'
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import OrderModal from "../components/OrderModal";
import { useRouter } from "next/router";

export default function Cart() {
    const CartData = useStore((state) => state.cart)
    const removePizza = useStore((state) => state.removePizza)
    const [PaymentMethod, setPaymentMethod] = useState(null)
    const [Order, setOrder] = useState(
        typeof window !== 'undefined' && localStorage.getItem('order')
    )
    const handleRemove = (i) => {
        removePizza(i);
        toast.error('Item removido!')
    }
    const router = useRouter()
    //Função para somar o valor das pizzas do carrinho e gerar o valor total//
    const total = () => CartData.pizzas.reduce((a, b) => a + b.quantity * b.price, 0)

    const handleOnDelivery = () => {
        setPaymentMethod(0);
        typeof window !== 'undefined' && localStorage.setItem('total', total())
    }
    const handleCheckout = async () => {
        typeof window !== 'undefined' && localStorage.setItem('total', total())
        setPaymentMethod(1);
        const response = await fetch('/api/stripe', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(CartData.pizzas)
        });
        if (response.status === 500) return;
        const data = await response.json();
        toast.loading("Redirecionando...");
        router.push(data.url)
    }
    return (
        <Layout>
            <div className={css.container}>

                {/* Detalhes */}
                <div className={css.details}>

                    <table className={css.table}>
                        <thead>
                            <th>Pizza</th>
                            <th>Nome</th>
                            <th>Tamanho</th>
                            <th>Valor</th>
                            <th>Quantidade</th>
                            <th>Total</th>
                            <th></th>
                        </thead>
                        <tbody className={css.tbody}>
                            {CartData.pizzas.length > 0 && CartData.pizzas.map((pizza, i) => {
                                const src = urlFor(pizza.image).url()
                                return (
                                    < tr key={i} >
                                        <td className={css.imageTd}>
                                            <Image loader={() => src}
                                                src={src}

                                                alt="" objectFit="cover" width={85} height={85}
                                            />
                                        </td>
                                        <td>
                                            {pizza.name}
                                        </td>
                                        <td>
                                            {pizza.size === 0 ? "Pequena" : pizza.size === 1 ? "Media" : "Grande"}
                                        </td>
                                        <td>
                                            {pizza.price}
                                        </td>
                                        <td>{pizza.quantity}</td>
                                        <td>
                                            {pizza.price * pizza.quantity}
                                        </td>
                                        <td style={{ color: "var(--themeRed", cursor: "pointer" }} onClick={() => handleRemove(i)}>
                                            X
                                        </td>
                                    </tr>
                                )

                            })}
                        </tbody>
                    </table>
                </div>

                {/* Summar */}
                <div className={css.cart}>
                    <span>Carrinho</span>
                    <div className={css.CartDetails}>
                        <div>
                            <span>Itens: </span>
                            <span>{CartData.pizzas.length}</span>
                        </div>
                        <div>
                            <span>Total: </span>
                            <span> <span style={{ color: "var(--themeRed)" }}>R$ </span> {total()} </span>
                        </div>


                        <div className={css.buttons}>
                            <button className="btn" onClick={handleOnDelivery}>Pagar na entrega</button>
                            <button className="btn" onClick={handleCheckout}>Pagar agora</button>
                        </div>




                    </div>
                </div>
            </div>
            <Toaster />
            {/* Modelo */}
            <OrderModal opened={PaymentMethod === 0}
                setOpened={setPaymentMethod}
                PaymentMethod={setPaymentMethod}
            />
        </Layout >
    )



};
