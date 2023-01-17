import React from 'react';
import { SearchResults } from '../../service/TelephoneIndex';

type SearchResultsListProps = {
  searchResults: SearchResults
}

function SearchResultsList( props: SearchResultsListProps ) 
{
  return (
    <div id="search-results">
        <div id="search-results-list">
          <div className="search-result">
            Apple, Adam
          </div>
        </div>
        <p id="search-results-where"> 
          { props.searchResults.count === 0 ? "No results found." : props.searchResults.count + " results found." }
        </p>
    </div>
);
}

export default SearchResultsList;