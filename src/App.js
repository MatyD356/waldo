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

  const reset = () => {
    setCharacters([])
    setcurrentImg('')
    setGameOn(false)
    setWin(false)
    setTime({ minutes: 0, seconds: 0 })
  }
  return (
    <div className="App">
      <AsideMenu
        reset={reset}
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
          loadImage={setcurrentImg}
          characters={characters}
          updateCharacters={setCharacters}
          gameOn={gameOn}
          updateGameOn={setGameOn}
        />
      </main>
    </div>
  );
}

export default App;
