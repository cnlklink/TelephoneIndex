import React from 'react';
import { resourceLimits } from 'worker_threads';
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
                  return <div className = "search-result">{result.name}</div>
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