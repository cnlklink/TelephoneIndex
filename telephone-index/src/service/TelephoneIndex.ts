export type TelephoneIndexEntry =
{
  name: string
}

export type SearchResults = 
{
  entries: Array<TelephoneIndexEntry>
  count: number
}

export default interface TelephoneIndex
{
  createEntryWithFirstLast( firstName: string, lastName: string ): TelephoneIndexEntry

  searchByQuickIndexItem( item: string ): SearchResults
}

