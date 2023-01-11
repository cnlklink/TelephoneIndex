import React from 'react';

type SearchResultsProps = {
  numberOfResults: number
}

function SearchResults( props: SearchResultsProps ) 
{
  return (
    <div id="search-results">
        <p id="search-results-where"> 
          { props.numberOfResults === 0 ? "No results found." : props.numberOfResults + " results found." }
        </p>
    </div>
);
}

export default SearchResults;