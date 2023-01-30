import React from 'react';

import { SearchResults } from '../../service/TelephoneIndex'

import SearchBar from './SearchBar'
import SearchResultsList from './SearchResultsList'

type SearchProps = {
    searchResults: SearchResults,
    onSearch?: ( criteria: string ) => void
    criteria?: string
}

function Search( props: SearchProps ) 
{
    return (
        <div className='search'>
            <SearchBar criteria={ props.criteria } onCriteriaChanged={ props.onSearch }/>
            <SearchResultsList searchResults={props.searchResults}/>
        </div>
    )
}

export default Search