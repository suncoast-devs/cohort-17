import React from 'react'

import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <main className="hero">
        <h1>Welcome to Hike Finder</h1>
        <h2>Trails are meant to be hiked</h2>
        <Link to="/search" className="call-to-action">
          Find a trail
        </Link>
        <Link to="/signup" className="call-to-action">
          Create an Account
        </Link>
      </main>
    </>
  )
}
