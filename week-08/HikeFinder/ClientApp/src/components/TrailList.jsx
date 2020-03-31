import React from 'react'

const TrailList = props => {
  let { results } = props
  return (
    <ul>
      {results.map(trail => {
        return <li>{trail.name}</li>
      })}
    </ul>
  )
}

export default TrailList
