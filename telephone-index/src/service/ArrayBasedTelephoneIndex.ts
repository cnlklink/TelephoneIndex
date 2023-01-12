import TelephoneIndex, { TelephoneIndexEntry, SearchResults } from './TelephoneIndex'

class ArrayBasedTelephoneIndex implements TelephoneIndex
{
  searchByQuickIndexItem( item: string ): SearchResults
  {
    let entries = Array<TelephoneIndexEntry>()

    if( item === 'A' )
    {
      entries.push( {
        name: "Apple, Adam"
      })
    }
    else if( item === 'B' )
    {
      entries.push( {
        name: "Brown, Bob"
      },{
        name: "Blueberry, Billy"
      } )
    }

    return { 
      entries: entries,
      count: entries.length 
    }
  }
}

export default ArrayBasedTelephoneIndex 
