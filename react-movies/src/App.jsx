import { useEffect, useRef, useState } from 'react'
import './App.css'
import { searchMovies } from './services/movies'
import { Movies } from './components/movies'

function App () {
  const [movies, setMovies] = useState([])
  const isFirstRender = useRef(true)

  const handleSubmit = (event) => {
    event.preventDefault()
    isFirstRender.current = false
    const formData = new window.FormData(event.target)
    const searchText = formData.get('search')
    const foundMovies = searchMovies(searchText)
    setMovies(foundMovies)
  }

  return (
    <div id='page'>
      <header>
        <h1>
          Movie Searcher
        </h1>
        <form onSubmit={handleSubmit} className='form'>
          <input type='text' name='search' placeholder='Avengers, Matrix, Batman...' />
          <button type='submit' className='button'>Search</button>
        </form>
      </header>

      <main>
        {
          !isFirstRender.current && <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
