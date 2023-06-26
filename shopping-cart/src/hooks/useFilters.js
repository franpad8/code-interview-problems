import { useContext } from 'react'
import { FiltersContext } from '../contexts/filters.jsx'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = products => {
    if (filters === 'all') return [...products]

    return [...products].filter(product => product.category === filters)
  }

  return { filterProducts, filters, setFilters }
}
