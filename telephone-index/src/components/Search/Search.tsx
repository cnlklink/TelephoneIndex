import React from 'react';

import { SearchResults } from '../../service/TelephoneIndex'

import SearchBar from './SearchBar'
import SearchResultsList from './SearchResultsList'

type SearchProps = {
    searchResults: SearchResults
}

function Search( props: SearchProps ) 
{
    return (
        <div className='search'>
            <SearchBar/>
            <SearchResultsList searchResults={props.searchResults}/>
        </div>
    )
}

export default Search