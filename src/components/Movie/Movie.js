import React from 'react'
import './styles.css'

const Movie = ({title, posterPath, onViewDetails, onDeleteMovie}) => (
    <div className="movie">
        <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={title}/>
        <div className="movie-buttons">
            {window.location.pathname !== '/mylist' &&
                <span onClick={onViewDetails} className="information-circle">
                    <ion-icon name="information-circle"></ion-icon>
                </span>
            }

            <span onClick={onDeleteMovie} className="trash">
                <ion-icon name="trash"></ion-icon>
            </span>
        </div>
    </div>
)

export default Movie
