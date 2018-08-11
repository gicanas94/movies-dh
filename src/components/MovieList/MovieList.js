import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup  } from 'react-transition-group'
import './styles.css'
import Movie from '../Movie'

const MovieList = ({movies, onViewMovieDetails, onDeleteMovie}) => (
    <CSSTransitionGroup
        transitionEnterTimeout={150}
        transitionLeaveTimeout={150}
        transitionName="transition"
        className="movie-list">
        
        {movies.map(movie =>
            <Movie
                key={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
                onViewMovieDetails={onViewMovieDetails ? () => onViewMovieDetails(movie) : null}
                onDeleteMovie={() => onDeleteMovie(movie)}/>
        )}
    </CSSTransitionGroup>
)

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
}

export default MovieList
