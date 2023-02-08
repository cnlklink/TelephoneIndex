import { isAssertEntry } from 'typescript';
import { TelephoneIndexEntry } from '../../service/TelephoneIndex';

type SearchResultProps = {
    entry: TelephoneIndexEntry
}

function SearchResult( props: SearchResultProps ) 
{
    return <div className="search-result" key={props.entry.id} >{props.entry.name}</div>
}

export default SearchResult;