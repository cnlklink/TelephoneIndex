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
  searchByQuickIndexItem( item: string ): SearchResults
}

