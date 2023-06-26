export function useFilters () {
  const filterProducts = (products) => {
    return [...products].slice(0, 3)
  }

  return { filterProducts }
}
