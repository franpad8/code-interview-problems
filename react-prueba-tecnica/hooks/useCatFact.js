import { useState, useEffect } from 'react'
import { getRamdomCatFact } from '../services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState('lorem ipsum cat fact')
  const refreshRandomFact = () => { getRamdomCatFact().then(setFact) }

  useEffect(refreshRandomFact, [])
  return { fact, refreshRandomFact }
}
