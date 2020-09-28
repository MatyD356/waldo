import React from 'react'
import Navigation from './Navigation'
import CharacterList from './CharacterList'

import '../styles/AsideMenu.scss'

const AsideMenu = ({ characters }) => {

  return (
    <aside className='AsideMenu'>
      <h1 className='title'>Where's Waldo</h1>
      <p className='sub-title'>find Waldo and his friends</p>
      <Navigation />
      <CharacterList characters={characters} />
    </aside >
  )
}

export default AsideMenu