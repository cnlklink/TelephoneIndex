import React, { useEffect } from 'react';
import QuickIndex from './components/QuickIndex/QuickIndex'
import SearchResults from './components/Search/SearchResults'
import SearchBar from './components/Search/SearchBar'
import './App.css';

function App() {
  useEffect( () => {
    document.title = 'Telephone Index'
  }, [] );

  return (
    <div className="Telephone-Index-App">
      <header className="Telephone-Index-App-header">
        <h1> Telephone Index </h1>
      </header>

      <QuickIndex/>

      <SearchBar/>

      <SearchResults/>
    </div>
  );
}

export default App;
