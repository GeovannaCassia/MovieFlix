import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_THE_MOVIE_DB_API_TOKEN}`,
        "Content-Type": "application/json;charset=utf-8"
    }
});

export default api;