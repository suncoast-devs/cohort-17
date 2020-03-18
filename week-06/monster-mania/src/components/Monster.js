import React from 'react'

class Monster extends React.Component {
  render() {
    return (
      <li>
        <img src={this.props.imageUrl} alt="" />
        <p>{this.props.monsterName}</p>
      </li>
    )
  }
}

export default Monster
