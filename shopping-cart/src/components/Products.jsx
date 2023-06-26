import './Products.css'

export function Products ({ products }) {
  return (
    <main className='products'>
      <ul>
        {
          products.map(product => (
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