import React, { useState } from 'react';
import './App.scss';


import PhotoContainer from './components/PhotoContainer'
import AsideMenu from './components/AsideMenu'

function App() {
  const [characters, setCharacters] = useState([])
  const [currentImg, setcurrentImg] = useState('')
  const [gameOn, setGameOn] = useState(false)
  const [win, setWin] = useState(false)
  const [time, setTime] = useState({ minutes: 0, seconds: 0 })

  const updateCharacters = (newState) => {
    setCharacters(newState)
  }
  const updateGameOn = (newState) => {
    setGameOn(newState)
  }
  const loadImage = (newState) => {
    setcurrentImg(newState)
  }

  return (
    <div className="App">
      <AsideMenu
        win={win}
        characters={characters}
        currentImg={currentImg}
        time={time}
        setTime={setTime}
        gameOn={gameOn} />
      <main>
        <PhotoContainer
          win={win}
          time={time}
          setTime={setTime}
          setWin={setWin}
          currentImg={currentImg}
          loadImage={loadImage}
          characters={characters}
          updateCharacters={updateCharacters}
          gameOn={gameOn}
          updateGameOn={updateGameOn}
        />
      </main>
    </div>
  );
}

export default App;
