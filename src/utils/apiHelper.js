import axios from 'axios'

const baseURL = process.env.BASE_URL

const axiosInstance = axios.create({
    baseURL,
})

export default axiosInstance
