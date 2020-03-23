import React, { Component } from 'react'
import axios from 'axios'

import HelloWorld from './components/HelloWorld'
import CreatePet from './components/CreatePet'
import SelectedPet from './components/SelectedPet'
class App extends Component {
  state = {
    allPets: [],
    selectedPet: {},
  }

  async componentDidMount() {
    const resp = await axios.get('https://localhost:5001/api/pet')
    this.setState({
      allPets: resp.data,
    })
  }

  selectPet = pet => {
    console.log('pet was clicked', pet)
    this.setState({
      selectedPet: pet,
    })
  }

  render() {
    const allPets = [...this.state.allPets]
    return (
      <>
        <CreatePet />
        <section>
          <header>All Pets</header>
          <ul>
            {allPets.map(pet => {
              return (
                <li
                  key={pet.id}
                  onClick={() => {
                    this.selectPet(pet)
                  }}
                >
                  {pet.name}
                </li>
              )
            })}
          </ul>
        </section>
        <SelectedPet pet={this.state.selectedPet} />
      </>
    )
  }
}

export default App
