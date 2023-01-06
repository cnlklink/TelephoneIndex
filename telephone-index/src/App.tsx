import React, { useEffect } from 'react';
import QuickIndex from './components/QuickIndex'
import SearchResults from './components/SearchResults'
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

      <SearchResults/>
    </div>
  );
}

export default App;
