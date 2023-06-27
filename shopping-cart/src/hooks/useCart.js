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

  return { cart, addToCart }
}
