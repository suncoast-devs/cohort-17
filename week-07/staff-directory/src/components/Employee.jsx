import React from 'react'

const Employee = props => {
  const { fullName, jobTitle } = props
  return (
    <li>
      <img src="https://placekitten.com/200/200" alt="" />
      <p>{fullName}</p>
      <p>{jobTitle}</p>
    </li>
  )
}

export default Employee
