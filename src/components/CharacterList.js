import React from 'react'

const CharacterList = ({ characters }) => {
  return (
    <ul className='character-list'>
      {characters.map(item => <li className='character-item' key={item.x}>
        <img alt='' className='avatar' src={item.img} />
        <span className={item.hit === false ? 'red' : 'green'}>{item.name}</span>
      </li>)}
    </ul >
  )
}
export default CharacterList