import React, { Component } from 'react'

import axios from 'axios'

class SelectedPet extends Component {
  state = {
    hungerLevel: 'odd?',
  }

  feedPet = async () => {
    const resp = await axios.put(
      `https://localhost:5001/api/pet/${this.props.pet.id}/feed`
    )
  }

  render() {
    return (
      <>
        <h3>now playing with...</h3>
        <h1>{this.props.pet.name}</h1>
        <h3>{new Date(this.props.pet.birthday).toDateString()}</h3>
        <h2>hunger:{this.state.hungerLevel}</h2>
        <h2>happiness:{this.props.pet.happinessLevel}</h2>
        <button onClick={this.feedPet}>FEED ME!</button>
      </>
    )
  }
}

export default SelectedPet
