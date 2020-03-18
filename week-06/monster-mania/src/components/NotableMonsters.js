import React, { Component } from 'react'
import Monster from './Monster'

import bride from '../images/bride.jpg'
import nosferatu from '../images/nosferatu.jpg'
import wolfman from '../images/wolfman.jpg'

export class NotableMonsters extends Component {
  render() {
    const monsters = [
      { name: 'Wolfman', url: wolfman },
      { name: 'Nosferatu', url: nosferatu },
      { name: 'Bride of Frankenstein', url: bride },
    ]
    return (
      <section class="notable-monsters">
        <header>Notable Others</header>
        <ul>
          {monsters.map(mon => {
            return <Monster monsterName={mon.name} imageUrl={mon.url} />
          })}
          {/* <Monster monsterName="Wolfman" imageUrl={wolfman} />
          <Monster monsterName="Nosferatu" imageUrl={nosferatu} />
          <Monster imageUrl={bride} monsterName="Bride of Frankenstein" /> */}
        </ul>
      </section>
    )
  }
}

export default NotableMonsters
