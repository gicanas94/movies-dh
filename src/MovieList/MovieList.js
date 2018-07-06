import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup  } from 'react-transition-group'
import './styles.css'
import Movie from '../Movie'

const MovieList = ({movies, handleClickedMovie}) => (
    <CSSTransitionGroup
        transitionName="movies"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
        className="movie-list">

        {movies.map(movie =>
            <Movie
                key={movie.title}
                title={movie.title}
                description={movie.description}
                clickedMovie={() => handleClickedMovie(movie)}/>
        )}
    </CSSTransitionGroup>
)

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
}

export default MovieList
