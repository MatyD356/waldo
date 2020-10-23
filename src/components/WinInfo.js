import React, { useState } from 'react'
import { addScore } from '../Firebase'
import '../styles/WinInfo.scss'

const WinInfo = ({ time, imgName }) => {
  const [scores, setScores] = useState([])
  const [name, setName] = useState('')
  const [scoreSaved, setScoreSaved] = useState(false)

  const saveName = (e) => {
    setName(e.target.value)
  }
  const sendName = () => {
    addScore(setScores, name, time, imgName)
  }
  return (
    <div className="win-alert">
      {!scoreSaved ? <div className='win-alert-buttons'>
        <h2 className='win-alert-title'>Nice job</h2>
        <input type='text' onChange={saveName} className='win-alert-input' placeholder='Name' />
        <button className='win-alert-button'
          onClick={() => {
            sendName()
            setScoreSaved(true)
          }}>Save score</button>
      </div> : null}
      {scoreSaved ? <div className='win-alert-scores'>
        <h2 className='win-alert-title'>Scores</h2>
        <ul className='win-alert-list'>
          {scores.length > 0 ? scores.map((item, index) =>
            <li className='win-alert-list-item' key={index}>
              <p>Name: {item.name}</p>
              <p>
                Time: {item.time.minutes < 10 ? `0${item.time.minutes}` : item.time.minutes}:
                {item.time.seconds < 10 ? `0${item.time.seconds}` : item.time.seconds}
              </p>
            </li>) : null}
        </ul>
      </div> : null}
    </div>
  )
}

export default WinInfo