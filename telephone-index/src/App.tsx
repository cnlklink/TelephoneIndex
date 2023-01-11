import React, { useEffect, useState } from 'react';
import Header from './components/Layout/Header'
import QuickIndex from './components/QuickIndex/QuickIndex'
import Search from './components/Search/Search'
import './App.css';

function App() {
  useEffect( () => {
    document.title = 'Telephone Index'
  }, [] );

  const [numberOfSearchResults, setNumberOfSearchResults] = useState<number>( 0 )

  const quickIndexItemSelectedHandler = ( item: string ) => {
    if( item === 'A' )
    {
      setNumberOfSearchResults( 1 )
    }
    else
    {
      setNumberOfSearchResults( 0 )
    }
  }

  return (
    <div className="Telephone-Index-App">
      <Header/>

      <QuickIndex onItemSelected={quickIndexItemSelectedHandler}/>

      <Search numberOfSearchResults={numberOfSearchResults}/>
    </div>
  );
}

export default App;
