import React, { useEffect } from 'react'
import '../Styles/Square.scss'

const Circle = ({ cords }) => {
  useEffect(() => {
    if (cords.x > 50 || cords.y > 50) {
      document.documentElement.style.setProperty('--x', cords.x - 25 + 'px')
      document.documentElement.style.setProperty('--y', cords.y - 25 + 'px')
    } else {
      //allowing user to click within circle and change it's position
      const prevCords = getStyle()
      document.documentElement.style.setProperty('--x', prevCords.x + cords.x - 25 + 'px')
      document.documentElement.style.setProperty('--y', prevCords.y + cords.y - 25 + 'px')
    }
  })
  const getStyle = () => {
    const element = document.querySelector('.Circle')
    const style = getComputedStyle(element)
    const left = parseInt(style.left, 10)
    const top = parseInt(style.top, 10)
    return { x: left, y: top }
  }
  return (
    <div className="Circle" />
  )
}
export default Circle