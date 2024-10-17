import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "9e47026687cbf24e34cab4aa28e2ee74";

// https://api.themoviedb.org/3/trending/all/day?api_key=9e47026687cbf24e34cab4aa28e2ee74

const getTrendingVideos = axios.get(`${movieBaseUrl} /trending/all/day?api_key= ${api_key}`);

export default {
    getTrendingVideos
}