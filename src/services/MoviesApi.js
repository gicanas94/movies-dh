import axios from 'axios'

const API_KEY = '744898adeea517407589898d9323ac5b';

class MoviesApi {
    constructor() {
        this.axios = axios.create({
            baseURL: 'https://api.themoviedb.org/3',
            params: {
                api_key: API_KEY
            }
        })
    }

    getPopularMovies = () => this.axios.get('/movie/popular')
    getTopRatedMovies = () => this.axios.get('/movie/top_rated')
    getUpcomingMovies = () => this.axios.get('/movie/upcoming')
    getMovie = id => this.axios.get(`/movie/${id}`)
}

export default MoviesApi
