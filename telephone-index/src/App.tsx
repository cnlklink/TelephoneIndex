import React, { useEffect, useState } from 'react';
import Header from './components/Layout/Header'
import QuickIndex from './components/QuickIndex/QuickIndex'
import Search from './components/Search/Search'
import './App.css';

type SearchResults = {
  count: number
}

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
  if( item === 'A' )
  {
    _publishSearchResults( { count: 1 } )
  }
  else
  {
    _publishSearchResults( { count: 0 } )
  }
}

function _publishSearchResults( searchResults: SearchResults )
{
  _setNumberOfSearchResults( searchResults.count )
}

export default App;
