import React from 'react'

const TrailAverageRating = props => {
  const { reviews } = props

  let total = 0
  for (let i = 0; i < reviews.length; i++) {
    total += reviews[i].rating
  }
  const avg = total / reviews.length
  return (
    <>
      {avg} /5 ({reviews.length} reviews)
    </>
  )
}

export default TrailAverageRating
