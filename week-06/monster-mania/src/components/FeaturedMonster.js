import React, { Component } from 'react'
import godzilla from '../images/godzilla.jpg'

export class FeaturedMonster extends Component {
  render() {
    return (
      <section>
        <h3>Featured Monster</h3>
        <img src={godzilla} alt="Godzilla!" />
        <p>Godzilla</p>
        <p>The King of the Monsters</p>
      </section>
    )
  }
}

export default FeaturedMonster
