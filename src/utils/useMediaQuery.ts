// Listen matchMedia
import { useEffect, useState } from "react"

const getMatch = (query: string) => {
  return window.matchMedia(query)
}

const useMediaQuery = (query: string): boolean => {
  const [match, setMatch] = useState<boolean>(getMatch(query).matches)

  const handleChange = () => {
    setMatch(getMatch(query).matches)
  }

  useEffect(() => {
    const matchMedia = getMatch(query)
    matchMedia.addEventListener("change", handleChange)
    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return match
}

export default useMediaQuery
