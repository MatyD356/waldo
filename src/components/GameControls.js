import React from 'react'
import { getPicture, getCharacters } from '../Firebase'

const GameControls = ({ imgName, updateCharacters, gameOn, updateGameOn, loadImage, setImgName }) => {
  const color = imgName === 'picture-one' ? 'red' : 'yellow'
  return (
    <div className={`game-controls ${color}`}>
      <button className='control-button'
        onClick={() => {
          setImgName(imgName)
          getPicture(loadImage, `${imgName}-min.png`)
          getCharacters(updateCharacters, `${imgName}`)
          updateGameOn(!gameOn)
        }}>Start
            </button>
      <button className='control-button'>See scores</button>
    </div>
  )
}

export default GameControls