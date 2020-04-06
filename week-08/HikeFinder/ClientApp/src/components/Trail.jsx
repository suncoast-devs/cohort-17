import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import TrailAverageRating from './TrailAverageRating'

const Trail = props => {
  const { trail } = props

  const [newReviewText, setNewReviewText] = useState('')
  const [reviewScore, setReviewScore] = useState(0)
  const [reviews, setReviews] = useState(trail.reviews)

  const sendReviewToApi = async () => {
    const resp = await axios.post(`/api/trails/${trail.id}/reviews`, {
      rating: reviewScore,
      comment: newReviewText,
    })
    console.log(resp.data)
    // update state with  the new data
    setReviews([resp.data, ...reviews])
  }

  const saveTrailForUser = async () => {
    // tell our API 2 things,
    // Who is bookmarking the trail
    // what trail are we bookmarking
    const resp = await axios.post(
      `/api/bookmark/${trail.id}`,
      {},
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
    )
  }

  return (
    <main className="trail-details">
      <img src="https://placekitten.com/600/400" alt={trail.name} />
      <section className="trail-header">
        <h1>{trail.name}</h1>
        <button className="directions-link">
          <FontAwesomeIcon icon={faMapMarkedAlt} />
        </button>
        <p>{trail.grade}</p>
        <p>{trail.routeType}</p>
        <p className="reviews">
          <TrailAverageRating reviews={reviews} />
        </p>
        <p className="address">
          {trail.address} {trail.city}
        </p>
        <p className="description">{trail.description}</p>
      </section>
      {localStorage.getItem('token') ? (
        <section>
          Like this trail?
          <button onClick={saveTrailForUser}>bookmark for later</button>
        </section>
      ) : (
        <></>
      )}
      <section>
        <h2>Been there?</h2>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="leave a review"
          value={newReviewText}
          onChange={e => setNewReviewText(e.target.value)}
        ></textarea>
        <h2>rate it!</h2>

        <button onClick={() => setReviewScore(1)}>1</button>
        <button onClick={() => setReviewScore(2)}>2</button>
        <button onClick={() => setReviewScore(3)}>3</button>
        <button onClick={() => setReviewScore(4)}>4</button>
        <button onClick={() => setReviewScore(5)}>5</button>
        <h3>your score : {reviewScore}/5</h3>
        <div>
          <button onClick={sendReviewToApi}>Add Review</button>
        </div>
        <h2>Reviews</h2>

        <ul className="review-list">
          {reviews.map(review => {
            return (
              <li>
                <p className="review">{review.comment}</p>
                <p className="review-rating">{review.rating}/5</p>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export default Trail
