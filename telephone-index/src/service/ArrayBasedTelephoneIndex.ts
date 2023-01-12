import TelephoneIndex, { TelephoneIndexEntry, SearchResults } from './TelephoneIndex'

class ArrayBasedTelephoneIndex implements TelephoneIndex
{
  createEntryWithFirstLast(firstName: string, lastName: string): TelephoneIndexEntry 
  {
    let newEntry = {
      name: lastName + ", " + firstName 
    }

    this._entries.push( newEntry )

    return newEntry
  }

  searchByQuickIndexItem( item: string ): SearchResults
  {
    return { 
      entries: this._entries,
      count: this._entries.length 
    }
  }

  _entries: Array<TelephoneIndexEntry> = []
}

export default ArrayBasedTelephoneIndex 
