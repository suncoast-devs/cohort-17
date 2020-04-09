import React from 'react'

import { Link } from 'react-router-dom'

// Bring in the function that lets us use the context
import { useUserProfile } from '../components/UserProfileContext'

export function Home() {
  const contextObject = useUserProfile()

  return (
    <>
      <main className="hero">
        <h1>Welcome to Hike Finder, {contextObject.user.fullName}</h1>
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
