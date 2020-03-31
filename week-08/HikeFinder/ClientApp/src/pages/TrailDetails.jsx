import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PageLoaders from '../components/PageLoaders'
import Trail from '../components/Trail'

const TrailDetails = props => {
  console.log(props)
  const trailId = props.match.params.trailId

  const [trail, setTrail] = useState()

  const getTrailData = async () => {
    const resp = await axios.get('/api/trails/' + trailId)
    console.log(resp.data)
    setTrail(resp.data)
  }

  useEffect(() => {
    // make our API call on page load
    getTrailData()
  }, [])

  if (trail) {
    return <Trail trail={trail} />
  } else {
    return <PageLoaders />
  }
}

export default TrailDetails
