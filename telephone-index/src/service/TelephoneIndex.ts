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

  searchByCriteria( criteria: string ): SearchResults

  searchByQuickIndexItem( item: string ): SearchResults
}

