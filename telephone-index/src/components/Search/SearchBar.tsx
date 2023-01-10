import React from 'react';

function SearchBar() 
{
  return (
    <div id="search-bar">
        <form>
            <label>
                Search:
                <input name="search-criteria" type="text"/>
            </label>
        </form>
    </div>
    )
}

export default SearchBar