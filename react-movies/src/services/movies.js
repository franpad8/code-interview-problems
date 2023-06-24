// import moviesReturned from '../mocks/movies/withResults.json'
import { API_KEY } from '../constants/credentials'
import { SEARCH_MOVIES_API_ENDPOINT } from '../constants/endpoints'

export function searchMovies (title) {
  return fetch(`${SEARCH_MOVIES_API_ENDPOINT}?apikey=${API_KEY}&s=${title}`)
    .then(response => response.json())
    .then(data => {
      if (data.Response === 'True') {
        return data.Search
      }

      return []
    })
    .catch(() => {
      throw new Error('A new error has ocurred when fetching data')
    })
}
