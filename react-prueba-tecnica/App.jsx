import { useState, useEffect } from 'react'

const CAT_ENPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_PREFIX_RANDOM_IMAGE = 'https://cataas.com/'

export function App () {
  const [fact, setFact] = useState('lorem ipsum cat fact')
  const [imageUrl, setImageUrl] = useState(null)

  const fetchCatImageWith = (word) => {
    fetch(`${CAT_ENDPOINT_PREFIX_RANDOM_IMAGE}cat/says/${word}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(data => setImageUrl(data.url))
  }

  useEffect(() => {
    fetch(CAT_ENPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  useEffect(() => {
    const firstWord = fact.split(' ')[0]
    fetchCatImageWith(firstWord)
  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      <p>{fact}</p>
      {imageUrl && <img src={`${CAT_ENDPOINT_PREFIX_RANDOM_IMAGE}${imageUrl}`} alt={`random cat saying ${fact.split(' ')[0]}`} />}
    </main>
  )
}
