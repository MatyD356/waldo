import React, { useState } from 'react'
import '../Styles/PhotoContainer.scss'
import waldoOne from '../waldo.png'
import Circle from './Circle'

const PhotoContainer = () => {

  const [lastClick, setLastClick] = useState(null)
  const handleClick = (e) => {
    setLastClick({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
  }
  return (
    <div
      onClick={handleClick}
      className='PhotoContainer'>
      <img
        className='waldoPhoto'
        src={waldoOne}
        alt='waldo one'
      />
      {lastClick ? <Circle cords={lastClick} /> : null}
    </div>
  )
}
export default PhotoContainer