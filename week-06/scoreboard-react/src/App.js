import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Team from './components/Team'

class App extends React.Component {
  render() {
    return (
      <>
        <h1>My Score Board</h1>
        <Team initialTeamName="Team 1" />
        <Team initialTeamName="Team 2" />
      </>
    )
  }
}

export default App
