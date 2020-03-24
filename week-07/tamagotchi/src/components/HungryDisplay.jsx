import React from 'react'

const HungryDisplay = props => {
  const { hungerLevel } = props

  if (hungerLevel <= -10) {
    return <h2>Stuffed, no need to eat</h2>
  } else if (hungerLevel > -10 && hungerLevel < 0) {
    return <h2>Full, no need to eat</h2>
  } else if (hungerLevel == 0) {
    return <h2>Could eat, but not hungry</h2>
  } else {
    return <h2>Hungry!</h2>
  }
}

export default HungryDisplay
