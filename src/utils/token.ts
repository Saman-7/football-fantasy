export const getToken = () => {
  return JSON.parse(localStorage.getItem("token") || "{}")
}

export const setToken = (token: string) => {
  localStorage.setItem("token", JSON.stringify(token))
}

export const checkToken = (token: any) => {
  return typeof token === "string" && !!token
}
