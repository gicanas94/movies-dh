import React from 'react'
import './styles.css'

const SearchBar = ({changeSearchBar}) =>
    <div className="search-bar">
        <input
            type="text"
            placeholder="search a movie..."
            onChange={event => changeSearchBar(event.target.value)}/>
    </div>

export default SearchBar
