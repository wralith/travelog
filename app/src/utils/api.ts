import axios from 'axios'

const userData = JSON.parse(localStorage.getItem('userData')!)

export const api = axios.create({
  baseURL: `http://localhost:8080`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: userData ? userData.token : ''
  },
  // withCredentials: true,
  timeout: 10000
})
