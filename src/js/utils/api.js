import axios from 'axios';

//config axios for work with cookies
axios.defaults.withCredentials = true;
//init an instance with url of api
const instance = axios.create({
    baseURL: 'http://localhost:1337'
})


export default instance;