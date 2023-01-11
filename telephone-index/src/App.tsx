import React, { useEffect, useState } from 'react';
import Header from './components/Layout/Header'
import QuickIndex from './components/QuickIndex/QuickIndex'
import Search from './components/Search/Search'
import './App.css';

type SearchResults = 
{
  count: number
}

interface TelephoneIndex
{
  searchByQuickIndexItem( item: string ): SearchResults
}

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
      count: count 
    }
  }
}

let _telephoneIndex = new ArrayBasedTelephoneIndex()

let _numberOfSearchResults: number
let _setNumberOfSearchResults: ( numberOfSearchResults: number ) => void 

function App() 
{
  _setTitle()

  _initializeReactState()

  return (
    <div className="Telephone-Index-App">
      <Header/>

      <QuickIndex onItemSelected= { _quickIndexItemSelectedHandler } />

      <Search numberOfSearchResults= { _numberOfSearchResults } />
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
  [_numberOfSearchResults, _setNumberOfSearchResults] = useState<number>( 0 )
}

function _quickIndexItemSelectedHandler( item: string )
{
  _publishSearchResults( _telephoneIndex.searchByQuickIndexItem( item ) )
}

function _publishSearchResults( searchResults: SearchResults )
{
  _setNumberOfSearchResults( searchResults.count )
}

export default App;
