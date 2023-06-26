import products from '../mocks/products.json'
import './Products.css'

export function Products () {
  return (
    <main className='products'>
      <ul>
        {
          products.products.map(product => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - {product.price}$
              </div>
            </li>
          ))
        }
      </ul>
    </main>
  )
}
