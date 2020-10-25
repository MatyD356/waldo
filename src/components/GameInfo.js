import React from 'react'

import '../styles/GameInfo.scss'

const GameInfo = ({ setHowTo }) => {

  return (
    <div className='GameInfo'>
      <h2 className='GameInfo-title'>How to play this game</h2>
      <ul className='GameInfo-list'>
        <li className='GameInfo-list-item'>1. Chose a photo to play</li>
        <li className='GameInfo-list-item'>2. Check out characters that u will need to find (they will appear on left)</li>
        <li className='GameInfo-list-item'>3. Try to find all characters hidden in you'r photo</li>
        <li className='GameInfo-list-item'>4. The game will count your time so make it as fast as u can</li>
        <li className='GameInfo-list-item'>5. After u finish write your name and save your score</li>
        <li className='GameInfo-list-item'>6. Congrats u found Waldo (u can try to beat your score)</li>
      </ul>
      <button onClick={() => setHowTo(false)} className='GameInfo-button'>Got it</button>
    </div>
  )
}

export default GameInfo