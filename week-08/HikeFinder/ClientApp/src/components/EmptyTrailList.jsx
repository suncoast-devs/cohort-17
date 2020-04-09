import React from 'react'
import { Link } from 'react-router-dom'

import { useUserProfile } from '../components/UserProfileContext'

const EmptyTrailList = () => {
  const { user } = useUserProfile()

  return (
    <section className="no-results-message">
      No trail found. <Link to="/add">{user.fullName} - Add a new one?</Link>
    </section>
  )
}

export default EmptyTrailList
