import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect( () => {
    document.title = 'Telephone Index'
  }, [] );

  return (
    <div className="App">
      <header className="App-header">
        <h1> Telephone Index </h1>
      </header>

      <p> No results found. </p>
    </div>
  );
}

export default App;
