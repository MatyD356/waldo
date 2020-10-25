import React from 'react'

const Navigation = ({ reset, setHowTo }) => {

  return (<nav>
    <ul className='nav-list'>
      <li className='nav-item' onClick={() => reset()}>Home</li>
      <li className='nav-item' onClick={() => setHowTo(true)}>How to play?</li>
    </ul>
  </nav>)
}
export default Navigation