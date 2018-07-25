import React, { Component, Fragment } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import Movies from './components/Movies'
import { NavLink } from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movieToSearch: ''
        }
    }

    handleSearchMovie = event => {
        this.setState({
            movieToSearch: event.target.value
        })
    }

    render() {
        return (
            <Fragment>
                <header>
                    <nav>
                        <li><NavLink activeStyle={{textDecoration: "underline"}} exact to="/">Home</NavLink></li>
                        <li><NavLink activeStyle={{textDecoration: "underline"}} to="/mylist">My List</NavLink></li>
                    </nav>

                    <h1>Movies</h1>

                    <SearchBar onSearchMovie={this.handleSearchMovie}/>
                </header>

                <Movies movieToSearch={this.state.movieToSearch}/>
            </Fragment>
        )
    }
}

export default App
