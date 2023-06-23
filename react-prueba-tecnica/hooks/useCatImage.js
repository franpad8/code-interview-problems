import { useState, useEffect } from 'react'
import { CAT_ENDPOINT_PREFIX_RANDOM_IMAGE } from '../constants/endpoints'
import { getCatImageUrlWith } from '../services/facts'

export function useCatImage (fact) {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]
    getCatImageUrlWith(firstWord).then(setImageUrl)
  }, [fact])

  return { imageUrl: `${CAT_ENDPOINT_PREFIX_RANDOM_IMAGE}${imageUrl}` }
}
