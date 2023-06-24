import './App.css'
import { Movies } from './components/movies'
import { useSearch } from './hooks/useSearch'
import { useMovies } from './hooks/useMovies'

function App () {
  const [search, updateSearch, error] = useSearch()
  const [movies, getMovies] = useMovies()

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies(search)
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  const hasError = error.length > 0

  return (
    <div id='page'>
      <header>
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
        </form>
        {hasError && <p className='errors'>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
