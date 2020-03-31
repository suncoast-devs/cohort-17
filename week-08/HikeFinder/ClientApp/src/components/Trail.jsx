import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

const Trail = props => {
  const { trail } = props
  return (
    <main className="trail-details">
      <img src="https://placekitten.com/600/400" alt={trail.name} />
      <section>
        <h1>{trail.name}</h1>
        <button className="directions-link">
          <FontAwesomeIcon icon={faMapMarkedAlt} />
        </button>
        <p>{trail.grade}</p>
        <p>{trail.routeType}</p>
        <p className="address">
          {trail.address} {trail.city}
        </p>
        <p className="description">{trail.description}</p>
      </section>
    </main>
  )
}

export default Trail
