import { useEffect, useRef, useState } from 'react'
import './App.css'
import { withResults, withoutResults } from './mocks/movies'

function App () {
  const [movies, setMovies] = useState([])
  const isFirstRender = useRef(true)

  const handleSubmit = (event) => {
    event.preventDefault()
    isFirstRender.current = false
    setMovies(withoutResults.Search || [])
  }

  const renderListOfMovies = () => {
    if (isFirstRender.current) return

    return (
      <>
        {
          movies.length
            ? (
              <ul className='results'>
                {
                  movies.map((movie) => (
                    <li key={movie.imdbID} className='movie'>
                      <div className='movie-info'>
                        <h3>{movie.Title}</h3>
                        <span>{movie.Year}</span>
                      </div>
                      <img src={movie.Poster} alt={movie.Title} />
                    </li>
                  ))
                }
              </ul>
              )
            : (
              <p>No se encontraron resultados</p>
              )
        }
      </>
    )
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
        {renderListOfMovies()}
      </main>
    </div>
  )
}

export default App
