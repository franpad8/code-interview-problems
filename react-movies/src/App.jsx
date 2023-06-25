import { useState } from 'react'
import './App.css'
import { Movies } from './components/movies'
import { Search } from './components/search'
import { useMovies } from './hooks/useMovies'

function App () {
  const [sort, setSort] = useState(false)
  const { movies, getMovies, loading } = useMovies({ sort })

  return (
    <div className='page'>
      <header>
        <Search getMovies={getMovies} updateSort={setSort} />
      </header>

      <main>
        {
          loading
            ? <p>Loading...</p>
            : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
