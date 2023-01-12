import TelephoneIndex, { TelephoneIndexEntry, SearchResults } from './TelephoneIndex'

class ArrayBasedTelephoneIndex implements TelephoneIndex
{
  searchByQuickIndexItem( item: string ): SearchResults
  {
    let count = 0

    if( item === 'A' )
    {
      count = 1
    }

    return { 
      entries: Array<TelephoneIndexEntry>(),
      count: count 
    }
  }
}

export default ArrayBasedTelephoneIndex 
