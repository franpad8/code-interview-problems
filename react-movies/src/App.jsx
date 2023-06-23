import { useEffect, useRef, useState } from 'react'
import './App.css'
import { searchMovies } from './services/movies'
import { Movies } from './components/movies'

function App () {
  const [movies, setMovies] = useState(null)
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (search.length <= 3) {
      setError('Must have more than 3 characters')
      return
    }

    setError('')
  }, [search])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new window.FormData(event.target)
    const searchText = formData.get('search')
    const foundMovies = searchMovies(searchText)
    setMovies(foundMovies)
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
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
          <button type='submit' className='button' disabled={isFirstRender.current || hasError}>Search</button>
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
