import { combineReducers } from 'redux'
import { moviesReducer } from './moviesReducer'
import { loadingReducer } from './loadingReducer'
import { searchBarReducer } from './searchBarReducer'
import { alertReducer } from './alertReducer'

const rootReducer = combineReducers({
    movies: moviesReducer,
    loading: loadingReducer,
    movieToSearch: searchBarReducer,
    alert: alertReducer
})

export default rootReducer
