import { createContext, useReducer } from 'react'
import { CartReducer } from '../reducers/cart'

export const CartContext = createContext()

export function CartProvider (props) {
  const [state, dispatch] = useReducer(CartReducer, [])

  const addToCart = (product) => dispatch({ type: 'add_product', payload: product })
  const removeFromCart = (product) => dispatch({ type: 'remove_product', payload: product })
  const alreadyInCart = (product) => dispatch({ type: 'already_in_cart', payload: product })
  const total = () => dispatch({ type: 'get_total' })
  return (
    <CartContext.Provider value={{
      addToCart,
      removeFromCart,
      alreadyInCart,
      total,
      cart: state
    }}
    >
      {props.children}
    </CartContext.Provider>
  )
}
