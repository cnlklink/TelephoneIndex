import React from 'react';

function SearchBar() 
{
  return (
    <div id="search-bar">
        <form>
            <div className="search-bar__controls">
                <div className="search-bar__control">
                    <label> Search: </label>
                    <input name="search-criteria" type="text"/>
                </div>
            </div>
        </form>
    </div>
    )
}

export default SearchBar