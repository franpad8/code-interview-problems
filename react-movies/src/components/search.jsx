import { useSearch } from '../hooks/useSearch'

export function Search ({ getMovies, updateSort }) {
  const [search, updateSearch, error] = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies(search)
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  const hasError = error.length > 0

  const onChangeSort = (event) => {
    updateSort(event.target.checked)
  }

  return (
    <>
      <h1>
        Movie Search
      </h1>
      <form onSubmit={handleSubmit} className='form'>
        <input
          style={{
            border: '1px solid transparent',
            borderColor: hasError ? 'red' : 'transparent'
          }}
          onChange={handleChange} value={search}
          type='text' name='search' placeholder='Avengers, Matrix, Batman...'
        />
        <button type='submit' className='button' disabled={hasError}>Search</button>
        <input type='checkbox' onChange={onChangeSort} />
      </form>
      {hasError && <p className='errors'>{error}</p>}
    </>
  )
}
