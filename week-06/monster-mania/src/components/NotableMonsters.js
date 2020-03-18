import React, { Component } from 'react'
import Monster from './Monster'

import bride from '../images/bride.jpg'
import nosferatu from '../images/nosferatu.jpg'
import wolfman from '../images/wolfman.jpg'

export class NotableMonsters extends Component {
  render() {
    return (
      <section class="notable-monsters">
        <header>Notable Others</header>
        <ul>
          <Monster monsterName="Wolfman" imageUrl={wolfman} />
          <Monster monsterName="Nosferatu" imageUrl={nosferatu} />
          <Monster imageUrl={bride} monsterName="Bride of Frankenstein" />
        </ul>
      </section>
    )
  }
}

export default NotableMonsters
