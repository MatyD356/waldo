import React, { useState, useEffect } from 'react'
import '../styles/PhotoContainer.scss'
import Circle from './Circle'

import { getPicture } from '../Firebase.js'

const PhotoContainer = ({ characters, updateCharacters, gameOn, updateGameOn }) => {

  const [lastClick, setLastClick] = useState({ x: -1000, y: -1000 })
  const [currentImg, setcurrentImg] = useState('')

  //get data from database
  useEffect(() => {
    getPicture(setcurrentImg)
  }, [])

  //change characters hit if lastClick was near
  useEffect(() => {
    updateCharacters(
      characters.map(item => {
        if (item.x < lastClick.x + 25 && item.x > lastClick.x - 25
          && item.y < lastClick.y + 25 && item.y > lastClick.y - 25) {
          item.hit = true
          return item
        }
        return item
      })
    )
  }, [JSON.stringify(characters), lastClick.x, lastClick.y])

  //check if user found all characters
  useEffect(() => {
    if (characters.length > 1) {
      let hits = characters.filter(item => item.hit === true)
      if (hits.length === characters.length) {
        alert('u won')
        updateGameOn(!gameOn)
      }
    }
  }, [JSON.stringify(characters)])

  const handleClick = (e) => {
    let newX = e.nativeEvent.offsetX
    let newY = e.nativeEvent.offsetY
    setLastClick({ x: newX, y: newY })
  }
  return (
    <div onClick={handleClick} className='PhotoContainer'>
      {/*extract this to new component*/}
      {!gameOn ? <div className='game-controls'>
        <button className='control-button' onClick={() => updateGameOn(!gameOn)}>Start</button>
        <button className='control-button'>See scores</button>
      </div> :
        <img
          className='waldoPhoto'
          src={`${currentImg}`}
          alt='waldo one'
        />}

      {characters ? characters.map((item, index) => {
        if (item.hit) {
          return <Circle key={index} cords={{ x: item.x, y: item.y }} main={false} name={item.name} />
        } else {
          return null
        }
      }) : null}
      {lastClick ? <Circle cords={lastClick} main={true} /> : null}
    </div>
  )
}
export default PhotoContainer