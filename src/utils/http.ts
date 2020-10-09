import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3024'
})

export default http;