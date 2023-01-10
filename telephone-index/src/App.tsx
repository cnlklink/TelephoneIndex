import React, { useEffect } from 'react';
import Header from './components/Layout/Header'
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
      <Header/>

      <QuickIndex/>

      <SearchBar/>

      <SearchResults/>
    </div>
  );
}

export default App;
