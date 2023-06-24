import { useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies () {
  const [movies, setMovies] = useState(null)

  function getMovies (search) {
    searchMovies(search).then(returnedMovies => {
      setMovies(returnedMovies)
    })
  }

  return [movies, getMovies]
}
