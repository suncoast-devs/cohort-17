import React, { useState, useEffect } from 'react'

const Converter = ({ name, title }) => {
  //   state = {
  //     inches: 0,
  //     feet: 0,
  //   }

  // const name = props.name
  // const { name } = props

  const [inches, setInches] = useState(0)
  const [feet, setFeet] = useState(0)

  const convertToFeet = e => {
    const i = e.target.value
    setInches(i)
  }

  useEffect(() => {
    // is there we put the code we want to run
    console.log('inches were update')
    const f = inches / 12
    setFeet(f)
  }, [inches])

  return (
    <div>
      <h2>
        Hello {title} {name}
      </h2>
      <h1>
        {inches} inches is {feet} ft
      </h1>
      <input type="number" onChange={convertToFeet} />
    </div>
  )
}

export default Converter
