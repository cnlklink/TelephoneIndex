import TelephoneIndex, { TelephoneIndexEntry, SearchResults } from './TelephoneIndex'

class ArrayBasedTelephoneIndex implements TelephoneIndex
{
  createEntryWithFirstLast( firstName: string, lastName: string ): TelephoneIndexEntry 
  {
    let newEntry = {
      name: lastName + ", " + firstName 
    }

    this._entries.push( newEntry )

    return newEntry
  }

  fillWithTestData(): void
  {
    this.createEntryWithFirstLast( "Adam", "Apple" )
    this.createEntryWithFirstLast( "Bob", "Brown" )
    this.createEntryWithFirstLast( "Billy", "Blueberry" )
  }

  searchByQuickIndexItem( item: string ): SearchResults
  {
    let filterByFirstLetterInLastName = new RegExp( `^[${item}]`, "i" )
    let resultEntries = this._entries.filter( ( entry: TelephoneIndexEntry ) => { 
      return entry.name.match( filterByFirstLetterInLastName )
    } )

    return { 
      entries: resultEntries,
      count: resultEntries.length 
    }
  }

  _entries: Array<TelephoneIndexEntry> = []
}

export default ArrayBasedTelephoneIndex 
