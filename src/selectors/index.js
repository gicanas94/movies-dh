export const getMovies = state => state.movies.movies

//--------------------

export const filterMovies = state => {
    return getMovies(state).filter(movie => {
        return movie.title.toUpperCase().indexOf(state.movieToSearch.toUpperCase()) > -1
    })
}
