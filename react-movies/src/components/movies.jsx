/* eslint-disable react/prop-types */
function ListOfMovies ({ movies }) {
  return (
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
}

function NoMoviesFound () {
  return <p>No se encontraron resultados</p>
}

export function Movies ({ movies }) {
  if (!movies) return
  const hasMovies = movies?.length > 0

  return (
    hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesFound />
  )
}
