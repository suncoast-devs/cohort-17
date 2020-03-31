import React from 'react'
import { Link } from 'react-router-dom'

const EmptyTrailList = () => {
  return (
    <section className="no-results-message">
      No trail found. <Link to="/add">Add a new one?</Link>
    </section>
  )
}

export default EmptyTrailList
