import axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-burger-builder-4d40b-default-rtdb.firebaseio.com/'
})

export default instance;