import { useState } from 'react'
import javascriptLogo from '../javascript.svg'
import viteLogo from '../public/vite.svg'
import './style.css'

function App () {
  const [counter, setCounter] = useState(0)

  function onClick () {
    setCounter(counter + 1)
  }

  return (
    <div>
      <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
        <img src={viteLogo} className='logo' alt='Vite logo' />
      </a>
      <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' rel='noreferrer'>
        <img src={javascriptLogo} className='logo vanilla' alt='JavaScript logo' />
      </a>
      <h1>Hello Vite!</h1>
      <div className='card'>
        <button id='counter' type='button' onClick={onClick}>Count is: {counter}</button>
      </div>
      <p className='read-the-docs'>
        Click on the Vite logo to learn more
      </p>
    </div>
  )
}

export default App