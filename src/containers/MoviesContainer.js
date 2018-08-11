import { connect } from 'react-redux'
import Movies from '../components/Movies'
import { withRouter } from 'react-router-dom'

import {
	loadMovies,
	deleteMovieFromListWithAlert,
	viewMovieDetails,
	deselectMovie,
	addMovieToMyListWithAlert,
	deleteMovieFromMyListWithAlert
} from '../actions'

import { filterMovies } from '../selectors'

//--------------------

const mapStateToProps = state => ({
	movies: filterMovies(state),
	selectedMovie: state.movies.selected,
	myList: state.movies.myList,
	loading: state.loading,
	alert: state.alert
})

//--------------------

const mapDispatchToProps = {
  loadMovies,
  deleteMovieFromListWithAlert,
  viewMovieDetails,
  deselectMovie,
  addMovieToMyListWithAlert,
  deleteMovieFromMyListWithAlert
}

//--------------------

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movies))
