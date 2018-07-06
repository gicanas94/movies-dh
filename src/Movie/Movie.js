import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Movie = ({title, description, clickedMovie}) => (
    <div className="movie" onClick={clickedMovie}>
        <p className="movie-title">{title}</p>
        <p>{description || '-This movie has no description.-'}</p>
    </div>
)

Movie.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default Movie
