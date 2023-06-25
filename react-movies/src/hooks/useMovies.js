import { useRef, useState, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ sort }) {
  const [movies, setMovies] = useState(null)
  const [loading, setLoading] = useState(false)
  const previousSearch = useRef('')

  const getMovies = useCallback(search => {
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
  }, [])

  function sortedMovies () {
    if (!sort) {
      return movies
    }
    const sortedMovies = [...movies].sort((a, b) => a.Title.localeCompare(b.Title))
    return sortedMovies
  }

  return { movies: sortedMovies(), getMovies, loading }
}
