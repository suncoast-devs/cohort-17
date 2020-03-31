import React from 'react'

const Trail = props => {
  const { trail } = props
  return (
    <main className="trail-details">
      <img src="https://placekitten.com/600/400" alt={trail.name} />
      <section>
        <h1>{trail.name}</h1>
        <button>directions</button>
        <p>{trail.grade}</p>
        <p>{trail.routeType}</p>
        <p>
          {trail.address} {trail.city}
        </p>
        <p>{trail.description}</p>
      </section>
    </main>
  )
}

export default Trail
