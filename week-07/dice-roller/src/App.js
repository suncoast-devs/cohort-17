import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  state = {
    diceResult: 0,
  }
  rollDice = () => {
    const result = Math.ceil(Math.random() * 6)
    console.log('Rolling dice', result)
    // do other stuff here
    this.setState({
      diceResult: result,
    })
    console.log(this.state.diceResult)
  }

  render() {
    return (
      <>
        <main>
          <h1>{this.state.diceResult}</h1>
          <button onClick={this.rollDice}>Roll dice</button>
        </main>
      </>
    )
  }
}
export default App
