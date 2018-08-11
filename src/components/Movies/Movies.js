import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { CSSTransitionGroup  } from 'react-transition-group'
import { ALERTS } from '../../constants'
import MovieList from '../MovieList'
import MovieDetails from '../MovieDetails'
import Alert from '../Alert'
import './styles.css'

class Movies extends Component {
    componentDidMount() {
        this.props.loadMovies()
    }

    //--------------------

    render() {
        const {
            movies,
            myList,
            selectedMovie,
            deselectMovie,
            deleteMovieFromListWithAlert,
            viewMovieDetails,
            loading,
            addMovieToMyListWithAlert,
            deleteMovieFromMyListWithAlert,
            alert
        } = this.props

        return (
            <Fragment>
                {loading && <div className="loading-spinner-wrapper"><div className="loading-spinner"></div></div>}

                <CSSTransitionGroup
                    transitionEnterTimeout={150}
                    transitionLeaveTimeout={150}
                    transitionName="transition">

                    {alert && <Alert type={alert.type} text={alert.text}/>}
                </CSSTransitionGroup>

                <Switch>
                    <Route exact path="/">
                        <Fragment>
                            <CSSTransitionGroup
                                transitionEnterTimeout={150}
                                transitionLeaveTimeout={150}
                                transitionName="transition">

                                {selectedMovie && <MovieDetails movie={selectedMovie} onAddMovieToMyList={addMovieToMyListWithAlert} onDeselectMovie={deselectMovie}/>}
                            </CSSTransitionGroup>

                            <MovieList
                                movies={movies}
                                onViewMovieDetails={viewMovieDetails}
                                onDeleteMovie={deleteMovieFromListWithAlert}/>
                        </Fragment>
                    </Route>

                    <Route path="/mylist">
                        <Fragment>
                            {myList.length > 0 ?
                                <MovieList
                                    movies={myList}
                                    onClickMovie={null}
                                    onDeleteMovie={deleteMovieFromMyListWithAlert}/> :
                                <Alert type={ALERTS.MYLIST_EMPTY.type} text={ALERTS.MYLIST_EMPTY.text}/>
                            }
                        </Fragment>
                    </Route>
                </Switch>
            </Fragment>
        )
    }
}

export default Movies
