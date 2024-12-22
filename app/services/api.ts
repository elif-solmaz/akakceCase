import axios from "axios";

const api = axios.create({
    baseURL: "https://mock.akakce.dev",
});

export default api;
