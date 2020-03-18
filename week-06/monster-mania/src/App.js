import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Hero from './components/Hero'
import FeaturedMonster from './components/FeaturedMonster'
import NotableMonsters from './components/NotableMonsters'

class App extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <FeaturedMonster />
        <NotableMonsters />
      </>
    )
  }
}

export default App
