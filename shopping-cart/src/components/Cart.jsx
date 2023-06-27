import './Cart.css'
import { useId } from 'react'
import { CartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

const EmptyCart = () => (<p>Aun no hay productos en el carrito</p>)

export function Cart () {
  const cartCheckboxId = useId()
  const { cart } = useCart()
  const hasProducts = cart.length > 0

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        {
          hasProducts
            ? (
              <ul>
                {
                  cart.map(product => (
                    <CartItem
                      key={product.id}
                      {...product}
                    />
                  ))
                }
              </ul>
              )
            : <EmptyCart />
        }
      </aside>
    </>
  )
}
