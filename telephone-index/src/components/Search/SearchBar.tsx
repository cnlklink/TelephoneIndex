import React from 'react';

function SearchBar() 
{
    const searchCriteriaChangedHandler = () => {
        console.log( "Search criteria changed!" )
    }

    return (
        <div id="search-bar">
            <form>
                <div className="search-bar__controls">
                    <div className="search-bar__control">
                        <label> Search: </label>
                        <input name="search-criteria" type="text" onChange={searchCriteriaChangedHandler}/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar