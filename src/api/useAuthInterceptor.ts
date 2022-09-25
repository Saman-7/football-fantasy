import { axios } from "../api/axiosInstance"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const useAuthInterseptor = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const reqId = axios.interceptors.request.use((request) => {
      const localStorageToken = localStorage.getItem("token")

      if (!localStorageToken) {
        navigate("/signin")
      } else {
        let token
        try {
          token = localStorageToken && JSON.parse(localStorageToken)
        } catch {
          // failed to parse token
        }

        request.headers = {
          ...request.headers,
          token,
        }
      }

      return request
    })

    const resId = axios.interceptors.response.use(undefined, (err) => {
      if (err.status === 401) {
        navigate("/signin")
      }
    })

    return () => {
      axios.interceptors.request.eject(reqId)
      axios.interceptors.response.eject(resId)
    }
  }, [])
}
