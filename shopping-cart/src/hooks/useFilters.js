import { useContext } from 'react'
import { FiltersContext } from '../contexts/filters.jsx'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = products => {
    const filteredProducts = [...products].filter((p) => p.price >= filters.minPrice)

    if (filters.category === 'all') return filteredProducts
    return [...filteredProducts].filter(product => product.category === filters.category)
  }

  return { filterProducts, filters, setFilters }
}
