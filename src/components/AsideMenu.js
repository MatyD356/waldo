import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import CharacterList from './CharacterList'

import '../styles/AsideMenu.scss'

const AsideMenu = ({ characters, gameOn, currentImg }) => {
  const [time, setTime] = useState(0)
  useEffect(() => {
    if (gameOn) {
      const interval = setInterval(() => {
        setTime(time => time + 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [gameOn])

  return (
    <aside className='AsideMenu'>
      <h1 className='title'>Where's Waldo</h1>
      <Navigation />
      <h2 className='sub-title'>Find Waldo and his friends</h2>
      {!currentImg ? <h2 className='sub-title'>Choose a picture</h2> :
        <CharacterList characters={characters} />}
      <div>
        <h2>Your time</h2>
        <p>{time}</p>
      </div>
    </aside >
  )
}

export default AsideMenu