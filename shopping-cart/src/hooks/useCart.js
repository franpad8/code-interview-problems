import { useContext } from 'react'
import { CartContext } from '../contexts/cart'

export function useCart () {
  const { cart, setCart } = useContext(CartContext)

  function addToCart (product) {
    const productToAdd = { ...product, quantity: 1 }
    setCart((prevState) => {
      return [...prevState].concat([productToAdd])
    })
  }

  function alreadyInCart (productToFind) {
    return cart.some(product => product.id === productToFind.id)
  }

  function removeFromCart (productToRemove) {
    setCart((prevState) => {
      return [...prevState].filter(p => p.id !== productToRemove.id)
    })
  }

  return { addToCart, alreadyInCart, cart, removeFromCart }
}
