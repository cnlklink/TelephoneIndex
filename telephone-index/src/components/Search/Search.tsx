import React from 'react';

import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

type SearchProps = {
    numberOfSearchResults: number
}

function Search( props: SearchProps ) 
{
    return (
        <div className='search'>
            <SearchBar/>
            <SearchResults numberOfResults={props.numberOfSearchResults}/>
        </div>
    )
}

export default Search