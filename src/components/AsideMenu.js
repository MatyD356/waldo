import React, { useEffect } from 'react'
import Navigation from './Navigation'
import CharacterList from './CharacterList'

import '../styles/AsideMenu.scss'

const AsideMenu = ({ win, characters, gameOn, currentImg, time, setTime }) => {

  useEffect(() => {
    if (gameOn && !win) {
      const interval = setInterval(() => {
        if (time.seconds === 59) {
          setTime(time => {
            return {
              minutes: time.minutes + 1,
              seconds: 0
            }
          })
        } else {
          setTime(time => {
            return {
              minutes: time.minutes,
              seconds: time.seconds + 1
            }
          })
        }
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [gameOn, win, setTime, time.seconds])

  return (
    <aside className='AsideMenu'>
      <h1 className='title'>Where's Waldo</h1>
      <Navigation />
      <h2 className='sub-title'>Find Waldo and his friends</h2>
      {!currentImg ? <h2 className='sub-title'>Choose a picture</h2> :
        <CharacterList characters={characters} />}
      <div>
        <h2>Your time</h2>
        <p>
          {time.minutes < 10 ? `0${time.minutes}` : time.minutes}:
          {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
        </p>
      </div>
    </aside >
  )
}

export default AsideMenu