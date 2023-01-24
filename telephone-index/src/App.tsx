import React, { useEffect, useState } from 'react';
import Header from './components/Layout/Header'
import QuickIndex from './components/QuickIndex/QuickIndex'
import Search from './components/Search/Search'
import { SearchResults } from './service/TelephoneIndex'
import ArrayBasedTelephoneIndex from './service/ArrayBasedTelephoneIndex'
import './App.css';

let _telephoneIndex = new ArrayBasedTelephoneIndex()
_telephoneIndex.fillWithTestData()

let _searchResults: SearchResults
let _setSearchResults: ( searchResults: SearchResults ) => void 

let _selectedQuickIndexItem: string 
let _setSelectedQuickIndexItem: ( selectedQuickIndexItem: string ) => void

function App() 
{
  _setTitle()

  _initializeReactState()

  return (
    <div className="Telephone-Index-App">
      <Header/>

      <QuickIndex selectedItem = { _selectedQuickIndexItem } onItemSelected= { _quickIndexItemSelectedHandler } />

      <Search searchResults= { _searchResults } />
    </div>
  );
}

function _setTitle() 
{
  useEffect( () => {
    document.title = 'Telephone Index'
  }, [] );
}

function _initializeReactState()
{
  [_searchResults, _setSearchResults] = useState<SearchResults>( { 
    entries: [], 
    count: 0 
  } )

  [_selectedQuickIndexItem, _setSelectedQuickIndexItem] = useState<string>( '' )
}

function _quickIndexItemSelectedHandler( item: string )
{
  _publishSearchResults( _telephoneIndex.searchByQuickIndexItem( item ) )
  _setSelectedQuickIndexItem( item )
}

function _publishSearchResults( searchResults: SearchResults )
{
  _setSearchResults( searchResults )
}

export default App;
