import axios from 'axios'

const LOCALSTORAGE_KEY = 'TOKEN'

const vercelBackend = "https://dumpster-io-two.vercel.app/"

// const api = axios.create({ baseURL: `http://localhost:3000/api` })
const api = axios.create({ baseURL: vercelBackend })

api.interceptors.request.use(config => {
  const token = localStorage.getItem(LOCALSTORAGE_KEY)
  config.headers.Authorization = token
  return config
})

export default api