import React, { useState, useEffect } from 'react'
import '../styles/PhotoContainer.scss'
import Circle from './Circle'

import { getPicture } from '../Firebase.js'

const PhotoContainer = ({ characters, updateCharacters }) => {

  const [lastClick, setLastClick] = useState({ x: '', y: '' })
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
      }
    }
  }, [JSON.stringify(characters)])
  const handleClick = (e) => {
    let newX = e.nativeEvent.offsetX
    let newY = e.nativeEvent.offsetY
    setLastClick({ x: newX, y: newY })
  }
  return (
    <div
      onClick={handleClick}
      className='PhotoContainer'>
      <img
        className='waldoPhoto'
        src={`${currentImg}`}
        alt='waldo one'
      />
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