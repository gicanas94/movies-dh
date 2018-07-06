import React, { Component, Fragment } from 'react'
import './App.css'
import SearchBar from './SearchBar'
import Movies from './Movies'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movieToSearch: ''
        }
    }

    handleMovieToSearch = event => {
        this.setState({
            movieToSearch: event.target.value
        })
    }

    render() {
        return (
            <Fragment>
                <header>
                    <nav>
                        <li><a href="">Home</a></li>
                        <li><a href="">Movies</a></li>
                        <li><a href=""><strike>My List</strike></a></li>
                    </nav>

                    <SearchBar movieToSearch={this.handleMovieToSearch}/>

                    <h1>Movies</h1>
                </header>

                <Movies movieToSearch={this.state.movieToSearch}/>
            </Fragment>
        )
    }
}

export default App
