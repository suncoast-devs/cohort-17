import React, { useState, useEffect } from 'react'

import axios from 'axios'
import HungryDisplay from './HungryDisplay'

const SelectedPet = props => {
  // console.log(props.pet)

  //only gets the value once, when the component gets put on the page
  const [hungerLevel, setHungerLevel] = useState(0)

  const feedPet = async () => {
    console.log('feeding pet')
    const resp = await axios.put(
      `https://localhost:5001/api/pet/${props.pet.id}/feed`
    )
    setHungerLevel(resp.data.hungerLevel)
  }

  // updates state base on the props, when the props get updated
  // "watch for changes in properties"
  useEffect(() => {
    console.log('effect fired!')
    setHungerLevel(props.pet.hungerLevel)
  }, [props.pet.hungerLevel])

  return (
    <>
      <h3>now playing with...</h3>
      <h1>{props.pet.name}</h1>
      <h3>{new Date(props.pet.birthday).toDateString()}</h3>

      <HungryDisplay hungerLevel={hungerLevel} />

      <h2>happiness:{props.pet.happinessLevel}</h2>
      <button onClick={feedPet}>FEED ME!</button>
    </>
  )
}

// class SelectedPet extends Component {
//   state = {
//     hungerLevel: 'odd?',
//   }

//   feedPet = async () => {
//     const resp = await axios.put(
//       `https://localhost:5001/api/pet/${this.props.pet.id}/feed`
//     )
//   }

//   render() {
//     return (
//       <>
//         <h3>now playing with...</h3>
//         <h1>{this.props.pet.name}</h1>
//         <h3>{new Date(this.props.pet.birthday).toDateString()}</h3>
//         <h2>hunger:{this.state.hungerLevel}</h2>
//         <h2>happiness:{this.props.pet.happinessLevel}</h2>
//         <button onClick={this.feedPet}>FEED ME!</button>
//       </>
//     )
//   }
// }

export default SelectedPet
