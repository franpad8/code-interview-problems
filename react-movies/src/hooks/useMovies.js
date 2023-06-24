import { useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies () {
  const [movies, setMovies] = useState(null)

  function getMovies (search) {
    const returnedMovies = searchMovies(search)
    setMovies(returnedMovies)
    return returnedMovies
  }

  return [movies, getMovies]
}
