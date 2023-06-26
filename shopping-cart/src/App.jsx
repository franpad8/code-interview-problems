import './index.css'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { products as initialProducts } from './mocks/products.json'
import { useFilters } from './hooks/useFilters'

function App () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
