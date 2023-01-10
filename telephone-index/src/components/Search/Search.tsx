import React from 'react';

import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

function Search() 
{
    return (
        <div className='search'>
            <SearchBar/>
            <SearchResults/>
        </div>
    )
}

export default Search