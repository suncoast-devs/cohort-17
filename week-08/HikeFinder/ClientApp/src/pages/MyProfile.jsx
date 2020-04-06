import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MyProfile = () => {
  const [profile, setProfile] = useState({})
  // Hit a auth -only endpoint on component load
  // display the email and full name of the user
  const loadProfile = async () => {
    const resp = await axios.get('/api/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })

    console.log(resp.data)
    setProfile(resp.data)
  }
  useEffect(() => {
    // load the current user's profile
    loadProfile()
  }, [])
  return (
    <div>
      <h1>{profile.fullName}'s Profile</h1>
      <h2>{profile.email}</h2>
    </div>
  )
}

export default MyProfile
