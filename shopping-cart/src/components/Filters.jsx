import './Filters.css'
import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const categoryFilterId = useId()
  const { setFilters } = useFilters()

  function onCategoryFilterChange (event) {
    setFilters(event.target.value)
  }
  return (
    <section className='filters'>
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
