import { ALERTS } from '../constants'

const setMovies = movies => ({ type: 'SET_MOVIES', movies })
const loading = isLoading => ({ type: 'LOADING', isLoading })
const setMovie = movie => ({ type: 'SET_MOVIE', movie })
const deleteMovieFromList = movie => ({ type: 'DELETE_MOVIE_FROM_LIST', movieId: movie.id })
const addMovieToMyList = movie => ({ type: 'ADD_MOVIE_TO_MYLIST', movie })
const deleteMovieFromMyList= movie => ({ type: 'DELETE_MOVIE_FROM_MYLIST', movieId: movie.id })
const setAlert = alert => ({ type: 'SET_ALERT', alert })
const removeAlert = () => ({ type: 'REMOVE_ALERT' })
export const deselectMovie = () => ({ type: 'DESELECT_MOVIE' })
export const changeSearchBar = draft => ({ type: 'CHANGE_SEARCH_BAR', draft })

//--------------------

export const loadMovies = () => (dispatch, getState, api) => {
    dispatch(loading(true))

    api.getPopularMovies()
    .then(response => {
        dispatch(setMovies(response.data.results))
        dispatch(loading(false))
    })

    .catch(error => {
        dispatch(loading(false))

        console.log(error)

        dispatch(setAlert(ALERTS.API_ERROR))
    })
}

//--------------------

export const viewMovieDetails = movie => (dispatch, getState, api) => {
    const state = getState()

    if (movie.id !== (state.movies.selected && state.movies.selected.id)) {
        dispatch(loading(true))

        api.getMovie(movie.id)
        .then(response => {
            dispatch(setMovie(response.data))
            dispatch(loading(false))
        })

        .catch(error => {
            console.log(error)

            dispatch(loading(false))
        })
    }
}

//--------------------

export const deleteMovieFromListWithAlert = movie => dispatch => {
    dispatch(deleteMovieFromList(movie))
    dispatch(setAlert(ALERTS.MOVIE_DELETED_FROM_LIST))

    setTimeout(() => dispatch(removeAlert()), 2000)
}

//--------------------

export const addMovieToMyListWithAlert = movie => dispatch => {
    dispatch(addMovieToMyList(movie))
    dispatch(setAlert(ALERTS.MOVIE_ADDED_TO_MYLIST))

    setTimeout(() => dispatch(removeAlert()), 2000)
}

//--------------------

export const deleteMovieFromMyListWithAlert = movie => dispatch => {
    dispatch(deleteMovieFromMyList(movie))
    dispatch(setAlert(ALERTS.MOVIE_DELETED_FROM_MYLIST))

    setTimeout(() => dispatch(removeAlert()), 2000)
}
