const initialState = {
    movies: [],
    selected: null,
    myList: JSON.parse(window.localStorage.getItem('My List - movies-react-dh')) || [],
}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return {
                ...state,
                movies: action.movies
            }
        case 'SET_MOVIE':
            return {
                ...state,
                selected: action.movie
            }
        case 'DESELECT_MOVIE':
            return {
                ...state,
                selected: null
            }
        case 'DELETE_MOVIE_FROM_LIST':
            return {
                ...state,
                movies: state.movies.filter(movie => movie.id !== action.movieId),
                selected: state.selected !== null ? (state.selected.id === action.movieId ? null : state.selected) : null
            }
        case 'ADD_MOVIE_TO_MYLIST':
            const newStateWithAddedMovie = {
                ...state,
                myList: [...state.myList, action.movie]
            }

            window.localStorage.setItem('My List - movies-react-dh', JSON.stringify(newStateWithAddedMovie.myList));

            return newStateWithAddedMovie
        case 'DELETE_MOVIE_FROM_MYLIST':
            const newStateWithDeletedMovie = {
                ...state,
                myList: state.myList.filter(movie => movie.id !== action.movieId)
            }

            window.localStorage.setItem('My List - movies-react-dh', JSON.stringify(newStateWithDeletedMovie.myList));

            return newStateWithDeletedMovie
        default:
            return state
    }
}
