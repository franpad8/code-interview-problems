import { CAT_ENPOINT_RANDOM_FACT, CAT_ENDPOINT_PREFIX_RANDOM_IMAGE } from '../constants/endpoints'

export const getRamdomCatFact = async () => {
  const res = await fetch(CAT_ENPOINT_RANDOM_FACT)
  const data = await res.json()
  return data.fact
}

export const getCatImageUrlWith = async (word) => {
  const res = await fetch(`${CAT_ENDPOINT_PREFIX_RANDOM_IMAGE}cat/says/${word}?size=50&color=red&json=true`)
  const data = await res.json()
  return data.url
}
