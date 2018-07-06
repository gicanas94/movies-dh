import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const MovieDetails = ({movie, handleMovieToDelete}) => (
    <div className="movie-details-wrapper">
        <h2>Movie details...</h2>
        <div className="movie-details">
            <div className="details-image"></div>
            <div className="details-title-description-buttons">
                <p className="details-title">{movie.title}</p>
                <p>{movie.description}</p>

                <div className="details-buttons">
                    {movie.title !== '-' &&
                        <div>
                            <button><strike>Add to My List</strike></button>
                            <button onClick={() => handleMovieToDelete(movie)}>Remove</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
)

MovieDetails.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
    })
}

MovieDetails.defaultProps = {
    movie: {
        title: '-',
        description: '-'
    }
}

export default MovieDetails
