import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { CSSTransitionGroup  } from 'react-transition-group'
import './styles.css'
import Alert from '../Alert'
import MovieDetails from '../MovieDetails'
import MovieList from '../MovieList'
import MoviesApi from '../../services/MoviesApi'

class Movies extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            loadingMovies: true,
            myList: JSON.parse(window.localStorage.getItem('My List')) || [],
            alerts: []
        }

        this.api = new MoviesApi()
    }

    //--------------------

    handleViewDetails = movieToViewDetails => {
        this.setState({loadingMovies: true})

        this.api.getMovie(movieToViewDetails.id)
            .then(response => {
                const movie = response.data
                this.setState({
                    selectedMovie: movie,
                    alerts: {apiErrorAlert: ''},
                    loadingMovies: false
                })
            })
            .catch(error => {
                this.setState({
                    alerts: {apiErrorAlert: {type: 'error', text: 'There was an error when trying to get the list of movies.'}},
                    loadingMovies: false
                })

                console.log(error)
            })
    }

    //--------------------

    handleAddMovieToMyList = movieToAdd => {
        const myList = this.state.myList
        const newMyList = [...myList, movieToAdd]

        this.setState({
            myList: [...myList, movieToAdd],
            alerts: {addMovieToMyListAlert: {type: 'success', text: 'The movie was added to your list.'}}
        })

        setTimeout(() => this.setState({alerts: {addMovieToMyListAlert: ''}}), 2000)

        window.localStorage.setItem('My List', JSON.stringify(newMyList));
    }

    //--------------------

    handleDeleteMovieFromList = movieToDelete => {
        const newListOfMovies = this.state.movies.filter(movie => movie !== movieToDelete)

        if (this.state.selectedMovie && movieToDelete.id === this.state.selectedMovie.id) {
            this.setState({selectedMovie: false})
        }

        this.setState({
            movies: newListOfMovies,
            alerts: {deleteMovieFromListAlert: {type: 'error', text: 'The movie was removed from the list.'}}
        })

        setTimeout(() => this.setState({alerts: {deleteMovieFromListAlert: ''}}), 2000)
    }

    //--------------------

    handleDeleteMovieFromMyList = movieToDelete => {
        const newListOfMovies = this.state.myList.filter(movie => movie !== movieToDelete)

        this.setState({
            myList: newListOfMovies,
            alerts: {deleteMovieFromMyListAlert: {type: 'error', text: 'The movie was removed from your list.'}}
        })

        setTimeout(() => this.setState({alerts: {deleteMovieFromMyListAlert: ''}}), 2000)

        window.localStorage.setItem('My List', JSON.stringify(newListOfMovies));
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

    componentDidMount() {
        setTimeout(() => {
            this.api.getPopularMovies()
            .then(response => {
                const movies = response.data.results
                this.setState({
                    movies,
                    alerts: {apiErrorAlert: ''},
                    loadingMovies: false
                })
            })
            .catch(error => {
                this.setState({
                    alerts: {apiErrorAlert: {type: 'error', text: 'There was an error when trying to get the list of movies.'}},
                    loadingMovies: false
                })

                console.log(error)
            })
        }, 1000)
    }

    //--------------------

    render() {
        const {selectedMovie, searchedMovies, myList, alerts, loadingMovies} = this.state

        return (
            <Fragment>
                {loadingMovies &&
                    <div className="loading-spinner-wrapper"><div className="loading-spinner"></div></div>
                }

                <Switch>
                    <Route exact path="/">
                        <Fragment>
                            <CSSTransitionGroup transitionName="transition">
                                {alerts.addMovieToMyListAlert &&
                                    <Alert 
                                        type={alerts.addMovieToMyListAlert.type}
                                        text={alerts.addMovieToMyListAlert.text}/>
                                }

                                {alerts.deleteMovieFromListAlert &&
                                    <Alert 
                                        type={alerts.deleteMovieFromListAlert.type}
                                        text={alerts.deleteMovieFromListAlert.text}/>
                                }

                                {alerts.apiErrorAlert &&
                                    <Alert 
                                        type={alerts.apiErrorAlert.type}
                                        text={alerts.apiErrorAlert.text}/>
                                }

                                {selectedMovie && <MovieDetails movie={selectedMovie} onAddMovieToMyList={this.handleAddMovieToMyList}/>}
                            </CSSTransitionGroup>

                            <MovieList
                                movies={searchedMovies}
                                onViewDetails={this.handleViewDetails}
                                onDeleteMovie={this.handleDeleteMovieFromList}/>
                        </Fragment>
                    </Route>

                    <Route path="/mylist">
                        <Fragment>
                            {alerts.deleteMovieFromMyListAlert &&
                                <Alert 
                                    type={alerts.deleteMovieFromMyListAlert.type}
                                    text={alerts.deleteMovieFromMyListAlert.text}/>
                            }

                            {myList.length > 0 ?
                                <MovieList
                                    movies={myList}
                                    onClickMovie={null}
                                    onDeleteMovie={this.handleDeleteMovieFromMyList}/>
                            :
                                <Alert type="warning" text="Oops, your list is empty. You can add movies to your list by clicking on a movie in the list on the Home page and clicking on the Add to My List button."/>
                            }
                        </Fragment>
                    </Route>
                </Switch>
            </Fragment>
        )
    }
}

export default Movies
