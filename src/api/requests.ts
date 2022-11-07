import { axios } from "./axiosInstance"
import axiosMain from "axios"

export const getDashboardApi = () => {
  return axios.get("/api/v1/managers/dashboard")
}

export const getMatchWeekStatus = () => {
  return axios.get("/api/v1/events/current/info")
}

export const addPlayerApi = (id: string, position: number) => {
  const localStorageToken = localStorage.getItem("token")
  const token = localStorageToken && JSON.parse(localStorageToken)

  return axiosMain({
    method: "patch",
    url: "http://178.216.248.37:8080/api/v1/teams/add-player",
    data: {
      id,
      index: position,
    },
    headers: {
      token,
    },
  })
}

export const deletePlayerApi = (id: string, position: number) => {
  return axios({
    method: "patch",
    url: "/api/v1/teams/delete-player",
    data: {
      id,
      index: position,
    },
  })
}

export const searchPlayerApi = (
  page: number,
  filter: number,
  valueInput: string
) => {
  return axios.get("/api/v1/players/search", {
    params: {
      page,
      limit: 14,
      filter,
      web_name: valueInput,
    },
  })
}

export const changePlayerPitch = (
  inIndex: number,
  inId: string,
  outIndex: number,
  outId: number
) => {
  const localStorageToken = localStorage.getItem("token")
  const token = localStorageToken && JSON.parse(localStorageToken)
  return axiosMain({
    method: "patch",
    url: "http://178.216.248.37:8080/api/v1/teams/substitution",
    data: { inIndex, inId, outIndex, outId },
    headers: {
      token: token,
    },
  })
}
