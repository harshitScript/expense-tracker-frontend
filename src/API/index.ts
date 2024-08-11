import axios from "axios";


const API = axios.create({
    timeout: 100000 //10sec
})


export default API;