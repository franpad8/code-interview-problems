import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatImage(fact)

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={refreshRandomFact}>Show new fact</button>

      <p>{fact}</p>
      {imageUrl && <img src={imageUrl} alt='random cat' />}
    </main>
  )
}
