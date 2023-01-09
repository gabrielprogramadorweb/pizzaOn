import { Modal, useMantineTheme } from "@mantine/core"
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useStore } from "../store/store";
import { createOrder } from "../lib/orderHandler";
import css from '../styles/OrderModal.module.css'
import { useRouter } from "next/router";

export default function OrderModal({ opened, setOpened, PaymentMethod }) {

    const theme = useMantineTheme();
    const router = useRouter();
    const [FormData, setFormData] = useState({})

    const handleInput = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value })

    }

    const resetCart = useStore((state) => state.resetCart)

    const total = typeof window !== 'undefined' && localStorage.getItem('total')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = await createOrder({ ...FormData, total, PaymentMethod })
        toast.success("Pedido feito");
        resetCart();
        {
            typeof window !== 'undefined' && localStorage.setItem('order', id)
        }
        router.push(`/order/${id}`)
    }

    return (
        <Modal overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            opened={opened}
            onClose={() => setOpened(null)}

        >
            {/* Modal Content */}
            <form onSubmit={handleSubmit} action="" className={css.formContainer}>
                <input onChange={handleInput} type="text" name="name" required placeholder="Nome" />
                <input onChange={handleInput} type="text" name="phone" required placeholder="Telefone" />
                <textarea onChange={handleInput} name="address" cols={8} rows={3} placeholder='Endereço' ></textarea>
                <span>
                    Você vai pagar <span> R$ {total} </span>

                </span>
                <button type="submit" className="btn">Faça a encomenda</button>
            </form>
            <Toaster />
        </Modal>
    )
};
