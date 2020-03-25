import React from 'react'
import Pie from '../components/Pie'

const PiePage = () => {
  return (
    <>
      <h1>Check our the fresh pies!</h1>
      <h2>the best of them all</h2>

      <ul>
        <Pie
          image="https://res.cloudinary.com/dbtqsg7vf/image/upload/v1559153663/pumpkin.jpg"
          name="Pumpking"
          numberInStock="1"
        />
        <Pie
          image="https://res.cloudinary.com/dbtqsg7vf/image/upload/v1559153662/smores.jpg"
          name="Smores"
          numberInStock="10"
        />
        <Pie
          image="https://res.cloudinary.com/dbtqsg7vf/image/upload/v1559153662/apple.jpg"
          name="Apple"
          numberInStock="3"
        />
        <Pie
          image="https://res.cloudinary.com/dbtqsg7vf/image/upload/v1559153663/sugar-cream.jpg"
          name="Sugar Cream"
          numberInStock="4"
        />
      </ul>
    </>
  )
}

export default PiePage
