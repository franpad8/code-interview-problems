import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies () {
  const [movies, setMovies] = useState(null)
  const [loading, setLoading] = useState(false)
  const previousSearch = useRef('')

  function getMovies (search) {
    if (previousSearch.current === search) return
    previousSearch.current = search
    setLoading(true)
    searchMovies(search)
      .then(returnedMovies => {
        setMovies(returnedMovies)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return [movies, getMovies, loading]
}
