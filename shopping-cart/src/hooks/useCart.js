import { useContext } from 'react'
import { CartContext } from '../contexts/cart'

export function useCart () {
  const { cart } = useContext(CartContext)

  function alreadyInCart (productToFind) {
    return cart.some(product => product.id === productToFind.id)
  }

  const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0)
  return { alreadyInCart, total }
}
