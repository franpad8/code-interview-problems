import './index.css'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { Cart } from './components/Cart'
import { products as initialProducts } from './mocks/products.json'
import { useFilters } from './hooks/useFilters'
import { CartProvider } from './contexts/cart'

function App () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header />
      <CartProvider>
        <Cart />
        <Products products={filteredProducts} />
      </CartProvider>
    </>
  )
}

export default App
