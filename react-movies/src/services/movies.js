import moviesReturned from '../mocks/movies/withResults.json'

export function searchMovies (title) {
  if (moviesReturned.Response === 'True') {
    return moviesReturned.Search
  }

  return []
}
