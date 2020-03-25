import React from 'react'

const Cake = props => {
  return (
    <li>
      <img src={props.image} alt="" />
      <header>{props.name}</header>
      <p>Number in Stock: {props.numberInStock}</p>
    </li>
  )
}

export default Cake
