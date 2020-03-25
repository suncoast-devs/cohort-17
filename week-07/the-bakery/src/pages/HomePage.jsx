import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <h1>Welcome to my bakery</h1>
      <h2>Delicious Treats for a Wednesday!</h2>
      <ul>
        <li>
          <Link to="/cakes">Cakes</Link>
        </li>
        <li>
          <Link to="/pies">Pies</Link>
        </li>
        <li>
          <Link to="/cookies">Cookies</Link>
        </li>
      </ul>
    </>
  )
}

export default HomePage
