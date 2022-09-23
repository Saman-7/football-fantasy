import { useState, useEffect } from "react"

const useFetcher = <R>(
  fetcher: () => Promise<R>
): {
  data: R | undefined
  isLoading: boolean
  error: any
} => {
  const [data, setData] = useState<R>()
  const [error, setError] = useState<any>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetcher()
      .then(
        (res) => {
          setData(res)
        },
        (err) => {
          setError(err)
        }
      )
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return {
    data,
    error,
    isLoading,
  }
}

export default useFetcher
