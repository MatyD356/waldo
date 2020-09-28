import React, { useState, useEffect } from 'react';
import './App.scss';

import { getCharacters } from './Firebase'

import PhotoContainer from './components/PhotoContainer'
import AsideMenu from './components/AsideMenu'

function App() {
  const [characters, setCharacters] = useState([])

  //get data from database
  useEffect(() => {
    getCharacters(setCharacters)
  }, [])

  const updateCharacters = (newState) => {
    setCharacters(newState)
  }

  return (
    <div className="App">
      <AsideMenu characters={characters} />
      <main>
        <PhotoContainer characters={characters} updateCharacters={updateCharacters} />
      </main>
    </div>
  );
}

export default App;
