import React from 'react'
import './styles.css'

const SearchBar = ({movieToSearch}) => (
    <div className="search-bar">
        <input
            type="text"
            placeholder="search a movie..."
            onChange={movieToSearch}/>
    </div>
)

export default SearchBar
