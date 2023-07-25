import { useEffect, useState } from 'react'

export const UseMediaQuery = (query) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => media.removeEventListener('resize', listener)
  }, [matches, query])
  return matches
}
