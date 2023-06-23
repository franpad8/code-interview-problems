import './App.css'

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
    </div>
  )
}

export default App
