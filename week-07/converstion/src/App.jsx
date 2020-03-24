import React, { useState } from 'react'
import Converter from './components/Converter'

const App = () => {
  return (
    <>
      <Converter name="Hannah" title="Capt'n" />
    </>
  )
}

export default App

// import React, { Component } from 'react'

// class App extends Component {

//   convertToFeet = e => {
//     const inch = e.target.value
//     const ft = inch / 12

//     const newState = {}
//     newState.feet = ft
//     newState.inches = inch

//     this.setState(newState)
//   }

//   render() {
//     return (
//       <div>
//         <h1>
//           {this.state.inches} inches is {this.state.feet} ft
//         </h1>
//         <input type="number" onChange={this.convertToFeet} />
//       </div>
//     )
//   }
// }

// export default App
