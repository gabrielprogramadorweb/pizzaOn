import create from "zustand";

export const useStore = create(
    (set) => ({
        //cart
        cart: {
            pizzas: []
        },

        // add pizza no cart
        addPizza: (data) => set((state) => ({
            cart: {
                pizzas: [...state.cart.pizzas, data]
            }

        })),

        // Remove pizza
        removePizza: (index) => set((state) => ({
            cart: {
                pizzas: state.cart.pizzas.filter((_, i) => i != index)

            }
        })),

        //Reset de carrinho, limpar cart
        resetCart: () =>
            set(() => ({
                cart: {
                    pizzas: []
                }
            }))
    })
)