import { useContext } from 'react'
import { CartContext } from '../contexts/cart'

export function useCart () {
  const { cart, setCart } = useContext(CartContext)

  function addToCart (product) {
    setCart((prevState) => {
      const newCart = [...prevState]

      if (alreadyInCart(product)) {
        const productToUpdate = newCart.find(p => p.id === product.id)
        productToUpdate.quantity += 1
      } else {
        const productToAdd = { ...product, quantity: 1 }
        newCart.push(productToAdd)
      }

      return newCart
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

  const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0)
  return { addToCart, alreadyInCart, cart, removeFromCart, total }
}
