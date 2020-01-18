import axios from 'axios'

const Api = axios.create({
    baseURL: 'https://omnistack-265203.appspot.com'
})

export default Api
