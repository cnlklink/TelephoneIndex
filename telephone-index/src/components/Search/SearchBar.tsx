import React, { useState } from 'react';

type SearchForm = {
    enteredCriteria: string
}

function SearchBar() 
{
    const [, setSearchFormValues] = useState<SearchForm>( { 
        enteredCriteria: ''
    } )

    const searchCriteriaChangedHandler = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setSearchFormValues( (prevState) => {
            return { 
                ...prevState,
                enteredCriteria: event.target.value
            }
        } )
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