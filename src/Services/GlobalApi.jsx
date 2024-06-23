import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key='916164900e4c4793af8a17e5f196806d'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=916164900e4c4793af8a17e5f196806d';

//https://api.themoviedb.org/3/trending/all/day?api_key=916164900e4c4793af8a17e5f196806d
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}