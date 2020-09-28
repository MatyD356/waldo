import React from 'react'
import '../styles/AsideMenu.scss'


const AsideMenu = ({ characters }) => {

  return (
    <aside className="AsideMenu">
      <h1>Where's Waldo</h1>
      <p>find Waldo and his friends</p>
      <nav>
        <ul className="nav-list">
          <li>home</li>
          <li>Score</li>
          <li>Faq</li>
        </ul>
      </nav>
      <ul className="character-list">
        {characters.map(item => <li key={item.x}>{item.name}:{item.hit.toString()}</li>)}
      </ul >
    </aside >
  )
}

export default AsideMenu