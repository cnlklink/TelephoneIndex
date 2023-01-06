import React, { useEffect } from 'react';
import QuickIndex from './components/QuickIndex'
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

      <div id="search-results">
        <p id="search-results-where"> No results found. </p>
      </div>
    </div>
  );
}

export default App;
