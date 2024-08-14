import axios from "axios";


const API = axios.create({
    timeout: 100000 //10sec
})

axios.interceptors.request.use((config) => {
    config.headers['subdomain'] = window.location.hostname;
    return config
})


export default API;