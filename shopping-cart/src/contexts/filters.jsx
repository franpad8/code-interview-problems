import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export function FiltersProvider (props) {
  const [filters, setFilters] = useState('all')

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {props.children}
    </FiltersContext.Provider>
  )
}
