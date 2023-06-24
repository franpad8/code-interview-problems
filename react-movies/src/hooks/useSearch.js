import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState('')
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (search.length <= 3) {
      setError('Must have more than 3 characters')
      return
    }

    setError('')
  }, [search])

  return [search, updateSearch, error]
}
