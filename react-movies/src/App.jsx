import { useCallback, useState } from 'react'
import './App.css'
import { Movies } from './components/movies'
import { Search } from './components/search'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { movies, getMovies, loading } = useMovies({ sort })

  const debouncedGetMovies = useCallback(debounce(search => getMovies(search), 800), [getMovies])

  return (
    <div className='page'>
      <header>
        <Search getMovies={debouncedGetMovies} updateSort={setSort} />
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
