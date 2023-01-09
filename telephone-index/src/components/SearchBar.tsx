import React from 'react';

function SearchBar() 
{
  return (
    <div id="search-bar">
        <label>
            Search:
            <input name="search-criteria" type="text"/>
        </label>
    </div>
    )
}

export default SearchBar