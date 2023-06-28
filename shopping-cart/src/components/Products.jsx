import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { CartContext } from '../contexts/cart'
import { useContext } from 'react'
import { useCart } from '../hooks/useCart'

function ProductItem ({ product, isInCart, addToCart, removeFromCart }) {
  function handleCarButtonClick () {
    if (isInCart) {
      removeFromCart(product)
    } else {
      addToCart(product)
    }
  }

  return (
    <li>
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>
      <div>
        <button
          onClick={handleCarButtonClick}
          style={{ backgroundColor: `${isInCart ? 'red' : '#09f'}` }}
        >
          {
            isInCart
              ? <RemoveFromCartIcon />
              : <AddToCartIcon />
          }
        </button>
      </div>
    </li>
  )
}

export function Products ({ products }) {
  const { addToCart, removeFromCart } = useContext(CartContext)
  const { alreadyInCart } = useCart()

  return (
    <main className='products'>
      <ul>
        {
          products.map(product => {
            const isInCart = alreadyInCart(product)
            return (
              <ProductItem
                key={product.id}
                product={product}
                isInCart={isInCart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            )
          })
        }
      </ul>
    </main>
  )
}
