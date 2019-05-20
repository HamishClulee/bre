import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:1919'
    : window.location.origin

export const NODE = axios.create({
    baseURL: baseURL,
    withCredentials: true
})
