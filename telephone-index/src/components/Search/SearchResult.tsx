import React, { useState } from 'react';
import { TelephoneIndexEntry } from '../../service/TelephoneIndex';

type SearchResultProps = {
    entry: TelephoneIndexEntry
}

function SearchResult( props: SearchResultProps ) 
{
    return <div className="search-result">{props.entry.name}</div>
}

export default SearchResult;