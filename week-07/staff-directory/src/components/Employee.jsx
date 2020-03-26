import React from 'react'
import { Link } from 'react-router-dom'
const Employee = props => {
  const { id, fullName, jobTitle } = props
  return (
    <li>
      <Link to={`/employee/${id}`}>
        <img src="https://placekitten.com/200/200" alt="" />
        <p>{fullName}</p>
        <p>{jobTitle}</p>
      </Link>
    </li>
  )
}

export default Employee
