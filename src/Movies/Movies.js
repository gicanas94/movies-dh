import React, { Component, Fragment } from 'react'
import './styles.css'
import MovieDetails from '../MovieDetails'
import Form from '../Form'
import MovieList from '../MovieList'

class Movies extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [
                {
                    title: 'Madre!',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo quod odit recusandae, debitis ex, explicabo.'
                },
                {
                    title: 'Ready Player One',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo quod odit recusandae, debitis ex, explicabo.'
                },
                {
                    title: 'Tomb Invader',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo quod odit recusandae, debitis ex, explicabo.'
                },
                {
                    title: 'Black Panther',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo quod odit recusandae, debitis ex, explicabo.'
                },
                {
                    title: 'Avengers: Infinity War',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo quod odit recusandae, debitis ex, explicabo.'
                },
                {
                    title: 'Deadpool 2',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo quod odit recusandae, debitis ex, explicabo.'
                },
                {
                    title: 'Rampage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo quod odit recusandae, debitis ex, explicabo.'
                },
                {
                    title: 'Beauty and the Beast',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo quod odit recusandae, debitis ex, explicabo.'
                },
                {
                    title: 'The Killing of a Sacred Deer',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo quod odit recusandae, debitis ex, explicabo.'
                },
                {
                    title: 'Momo',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo quod odit recusandae, debitis ex, explicabo.'
                },
                {
                    title: 'Interstellar',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo quod odit recusandae, debitis ex, explicabo.'
                },
                {
                    title: 'Titanic',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo quod odit recusandae, debitis ex, explicabo.'
                },
                {
                    title: 'Lord of War',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo quod odit recusandae, debitis ex, explicabo.'
                },
                {
                    title: 'Incredibles',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo quod odit recusandae, debitis ex, explicabo.'
                },
                {
                    title: 'Incredibles 2',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo quod odit recusandae, debitis ex, explicabo.'
                },
                {
                    title: 'Acts of Violence',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo quod odit recusandae, debitis ex, explicabo.'
                },
                {
                    title: '15:17 Paris',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo quod odit recusandae, debitis ex, explicabo.'
                },
                {
                    title: 'Peter Rabbit',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo quod odit recusandae, debitis ex, explicabo.'
                }
            ]
        }
    }

    //--------------------

    handleClickedMovie = movie => (
        this.setState({clickedMovie: movie})
    )

    //--------------------

    handleMovieToDelete = movieToDelete => {
        const newListOfMovies = this.state.movies.filter(movie => movie !== movieToDelete)

        this.setState({movies: newListOfMovies})

        this.handleClickedMovie()
    }

    //--------------------

    handleMovieToAdd = (event, movieToAdd) => {
        event.preventDefault()

        const {movies} = this.state

        if (movieToAdd.title === '') {
            this.setState({formErrors: 'The movie must has a title!'})
        } else if (this.movieAlreadyExists(movieToAdd)) {
            this.setState({formErrors: 'The movie already exists, please use the searchbar.'})
        } else {
            this.setState({
                movies: [movieToAdd, ...movies],
                formErrors: ''
            })
        }
    }

    //--------------------

    movieAlreadyExists = movieToAdd => {
        const {movies} = this.state

        return movies.some(movie => movie.title === movieToAdd.title)
    }

    //--------------------

    static getDerivedStateFromProps(props, state) {
        const {movies} = state
        const {movieToSearch} = props

        const results = movies.filter(movie => {
            return movie.title.toUpperCase().indexOf(movieToSearch.toUpperCase()) > -1
        })

        return {searchedMovies: results}
    }

    //--------------------

    render() {
        const {clickedMovie, searchedMovies, formErrors} = this.state

        return (
            <Fragment>
                <div className="wrapper-1">
                    <MovieDetails movie={clickedMovie} handleMovieToDelete={this.handleMovieToDelete}/>
                    <Form movieToAdd={this.handleMovieToAdd} errors={formErrors}/>
                </div>

                <MovieList movies={searchedMovies} handleClickedMovie={this.handleClickedMovie}/>
            </Fragment>
        )
    }
}

export default Movies
