import './Filters.css'
import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const categoryFilterId = useId()
  const priceFilterId = useId()

  const { filters, setFilters } = useFilters()

  function onCategoryFilterChange (event) {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value
    }))
  }

  function onPriceFilterChange (event) {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: parseInt(event.target.value)
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={priceFilterId}>Rango de Precio</label>
        <input
          id={priceFilterId}
          onChange={onPriceFilterChange}
          type='range'
          min='0'
          max='1000'
          value={filters.minPrice}
        />
        <label>{filters.minPrice}$</label>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId} onChange={onCategoryFilterChange}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
