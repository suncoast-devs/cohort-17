import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends React.Component {
  state = {
    menuItems: [],
  }

  componentDidMount() {
    // once the app is added to the page, make an API call to load the data
    fetch('https://sdg-taco-truck.herokuapp.com/api/MenuItem')
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(data => {
        console.log(data)
        this.setState({
          menuItems: data,
        })
      })
  }

  render() {
    return (
      <>
        <h1>My Menu Items for my Truck</h1>
        <ul>
          {this.state.menuItems.map(item => {
            return (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <p>
                  <span className="description-label">description:</span>{' '}
                  {item.description}
                </p>
                <p>calories: {item.calories}</p>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default App
