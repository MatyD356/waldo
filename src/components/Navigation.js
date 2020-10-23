import React from 'react'

const Navigation = ({ reset }) => {

  return (<nav>
    <ul className='nav-list'>
      <li className='nav-item' onClick={() => reset()}>Home</li>
      <li className='nav-item'>How to play?</li>
    </ul>
  </nav>)
}
export default Navigation