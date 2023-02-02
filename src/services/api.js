import axios from "axios";

const api = axios.create({
    baseURL: "https://godo-api.herokuapp.com/api"
});

export default api;