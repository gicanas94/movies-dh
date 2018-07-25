import React from 'react'
import './styles.css'

const SearchBar = ({onSearchMovie}) => (
    <div className="search-bar">
        <input
            type="text"
            placeholder="search a movie..."
            onChange={onSearchMovie}/>
    </div>
)

export default SearchBar
