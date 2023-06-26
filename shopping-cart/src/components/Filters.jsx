import { useId } from 'react'

export function Filters () {
  const categoryFilterId = useId()

  return (
    <section className='filters'>
      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
