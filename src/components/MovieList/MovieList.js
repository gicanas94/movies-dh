import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup  } from 'react-transition-group'
import './styles.css'
import Movie from '../Movie'

const MovieList = ({movies, onViewDetails, onDeleteMovie}) => (
    <CSSTransitionGroup transitionName="transition" className="movie-list">
        {movies.map(movie =>
            <Movie
                key={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
                onViewDetails={onViewDetails ? () => onViewDetails(movie) : null}
                onDeleteMovie={() => onDeleteMovie(movie)}/>
        )}
    </CSSTransitionGroup>
)

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
}

export default MovieList
