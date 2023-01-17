import React from 'react';
import SearchResult from './SearchResult'
import { SearchResults } from '../../service/TelephoneIndex';

type SearchResultsListProps = {
  searchResults: SearchResults
}

function SearchResultsList( props: SearchResultsListProps ) 
{
  const results = props.searchResults.entries

  return (
    <div id="search-results">
        <div id="search-results-list">
          {
              results.map( (result, _) => {
                  return <SearchResult entry={result}/>
              } )
          }
        </div>
        <p id="search-results-where"> 
          { props.searchResults.count === 0 ? "No results found." : props.searchResults.count + " results found." }
        </p>
    </div>
);
}

export default SearchResultsList;