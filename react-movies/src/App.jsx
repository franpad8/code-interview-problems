import './App.css'
import { withResults } from './mocks/movies'

function App () {
  return (
    <div id='page'>
      <header>
        <h1>
          Movie Searcher
        </h1>
        <form className='form'>
          <input type='text' className='search' placeholder='Avengers, Matrix, Batman...' />
          <button type='submit' className='button'>Search</button>
        </form>
      </header>

      <main>
        <ul className='results'>
          {
            withResults.Search.map((movie) => (
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
      </main>
    </div>
  )
}

export default App
