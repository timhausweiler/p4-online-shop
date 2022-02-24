import axios from 'axios'

const baseUrl = 'http://whispering-brook-27627.herokuapp.com'

export const api = axios.create({
  baseURL: baseUrl
})

