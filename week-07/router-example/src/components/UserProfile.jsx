import React from 'react'

const UserProfile = props => {
  console.log(props)
  return <div>{props.match.params.username}'s Profile!</div>
}

export default UserProfile
