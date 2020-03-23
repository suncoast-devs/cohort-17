import React, { Component } from 'react'
import axios from 'axios'
class CreatePet extends Component {
  state = {
    name: '',
  }
  trackNewPetName = e => {
    this.setState({
      name: e.target.value,
    })
  }
  createPet = async e => {
    e.preventDefault()
    //calling the API
    // api call to our API,POST
    const resp = await axios.post('https://localhost:5001/api/pet', {
      name: this.state.name,
    })
    console.log(resp)
    console.log(resp.data)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.createPet}>
          <input type="text" onChange={this.trackNewPetName} />
          <button>create pet</button>
        </form>
      </div>
    )
  }
}

export default CreatePet
