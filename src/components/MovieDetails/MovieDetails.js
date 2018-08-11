import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const MovieDetails = ({movie, onAddMovieToMyList, onDeselectMovie}) => (
    <div className="movie-details">
        <div className="buttons">
            <button onClick={() => onAddMovieToMyList(movie)}>Add to My List</button>
            <button onClick={onDeselectMovie}>X</button>
        </div>

        {/*<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>*/}

        <div className="heading">
            <h1>{movie.title} ({movie.vote_average} - {movie.vote_count} votes)</h1>
            <p className="tagline"><i>{movie.tagline}</i></p>
        </div>

        <p>{movie.overview}</p>

        <hr/>

        <div className="details">
            <div>
                <p><b>Genres:</b></p>
                {movie.genres.map(genre => <p key={genre.id}>- {genre.name}</p>)}
            </div>

            <div>
                <p><b>Production companies:</b></p>
                {movie.production_companies.map(company => <p key={company.name}>- {company.name}</p>)}
            </div>

            <div>
                <p><b>Production countries:</b></p>
                {movie.production_countries.map(country => <p key={country.name}>- {country.name}</p>)}
            </div>

            <p><b>Release date:</b> {movie.release_date}</p>

            <p><b>Budget: </b>$ {movie.budget.toLocaleString('ES')}</p>
        </div>
    </div>
)

MovieDetails.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        tagline: PropTypes.string,
        overview: PropTypes.string,
        genres: PropTypes.array,
        production_countries: PropTypes.array,
        production_companies: PropTypes.array,
        release_date: PropTypes.string,
        budget: PropTypes.number
    })
}

export default MovieDetails
