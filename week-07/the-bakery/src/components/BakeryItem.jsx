import React from 'react'

const BakeryItem = props => {
  return (
    <li>
      <img src={props.image} alt="" />
      <header>{props.name}</header>
      <p>Number in Stock: {props.numberInStock}</p>
    </li>
  )
}

export default BakeryItem
