import React from 'react';

type SearchBarProps = {
    onCriteriaChanged?: ( criteria: string ) => void
}

function SearchBar( props: SearchBarProps ) 
{
    const searchCriteriaChangedHandler = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        if( props.onCriteriaChanged )
        {
            props.onCriteriaChanged( event.target.value )
        }
    }

    return (
        <div id="search-bar">
            <form>
                <div className="search-bar__controls">
                    <div className="search-bar__control">
                        <label> Search: </label>
                        <input id="search-criteria" name="search-criteria" type="text" onChange={ searchCriteriaChangedHandler }/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar