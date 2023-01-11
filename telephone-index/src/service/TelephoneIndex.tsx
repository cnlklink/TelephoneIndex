import SearchResults from "../components/Search/SearchResults"

export type SearchResults = 
{
  count: number
}

export default interface TelephoneIndex
{
  searchByQuickIndexItem( item: string ): SearchResults
}

