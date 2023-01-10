import React, { useState } from 'react';

type SearchForm = {
    enteredCriteria: string
}

function SearchBar() 
{
    const [searchFormInput, setSearchFormValues] = useState<SearchForm>( { 
        enteredCriteria: ''
    } )

    const searchCriteriaChangedHandler = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setSearchFormValues( { 
            ...searchFormInput,
            enteredCriteria: event.target.value
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