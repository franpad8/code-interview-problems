import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export function FiltersProvider (props) {
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: 'all'
  })

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {props.children}
    </FiltersContext.Provider>
  )
}
