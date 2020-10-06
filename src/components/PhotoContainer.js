import React, { useState, useEffect } from 'react'
import '../styles/PhotoContainer.scss'
import Circle from './Circle'
import GameControls from './GameControls'

const PhotoContainer = ({ characters, updateCharacters, gameOn, updateGameOn, currentImg, loadImage }) => {

  const [lastClick, setLastClick] = useState({ x: -1000, y: -1000 })

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
    )// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(characters), lastClick.x, lastClick.y])

  //check if user found all characters
  useEffect(() => {
    if (characters.length > 1) {
      let hits = characters.filter(item => item.hit === true)
      if (hits.length === characters.length) {
        alert('u won')
        updateGameOn(!gameOn)
      }
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(characters)])

  //bug here
  const handleClick = (e) => {
    let newX = e.nativeEvent.offsetX
    let newY = e.nativeEvent.offsetY
    setLastClick({ x: newX, y: newY })
  }
  return (
    <div className='PhotoContainer'>
      {!gameOn ? <div className='game-controls-container'>
        <GameControls
          imgName='picture-one'
          loadImage={loadImage}
          gameOn={gameOn}
          updateGameOn={updateGameOn}
          updateCharacters={updateCharacters}
        />
        <GameControls
          imgName='picture-two'
          loadImage={loadImage}
          gameOn={gameOn}
          updateGameOn={updateGameOn}
          updateCharacters={updateCharacters}
        />
      </div> :
        <img
          onClick={handleClick}
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