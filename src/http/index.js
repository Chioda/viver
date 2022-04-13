import axios from 'axios'

const http = axios.create({
    baseURL: 'https://54.207.61.37:4430',
    headers: {
        'Accept': 'application/json',
        'Content': 'application/json'
    }
})

http.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, 
function (erro) {
    return Promise.reject(erro)
})

export default http
