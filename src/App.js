import React, { Fragment } from 'react'
import './App.css'
import SearchBarContainer from './containers/SearchBarContainer'
import MoviesContainer from './containers/MoviesContainer'
import { NavLink } from 'react-router-dom'

const App = () =>
    <Fragment>
        <header>
            <nav>
                <li><NavLink activeStyle={{textDecoration: "underline"}} exact to="/">Home</NavLink></li>
                <li><NavLink activeStyle={{textDecoration: "underline"}} to="/mylist">My List</NavLink></li>
            </nav>

            <h1>Movies</h1>

            <SearchBarContainer/>
        </header>

        <MoviesContainer/>
    </Fragment>

export default App
