import { TelephoneIndexEntry } from '../../service/TelephoneIndex';

type SearchResultProps = {
    entry: TelephoneIndexEntry
}

function SearchResult( props: SearchResultProps ) 
{
    return <li>
        <div className="search-result" key={props.entry.id} >{props.entry.name}</div>
    </li>
}

export default SearchResult;