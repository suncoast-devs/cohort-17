import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

const Trail = props => {
  const { trail } = props
  const [newReviewText, setNewReviewText] = useState('')
  const [reviewScore, setReviewScore] = useState(0)

  const sendReviewToApi = async () => {
    const resp = await axios.post(`/api/trails/${trail.id}/reviews`, {
      rating : reviewScore,
      comment: newReviewText,
    })
    console.log(resp.data)
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
        <p className="reviews"> 4/5 (33 reviews) </p>
        <p className="address">
          {trail.address} {trail.city}
        </p>
        <p className="description">{trail.description}</p>
      </section>
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
          <li>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              cum voluptatem libero distinctio deserunt? Mollitia eveniet
              quibusdam consectetur suscipit atque fugiat doloremque illo quas
              recusandae ratione amet, ipsam facere repudiandae?
            </p>
            <p className="review-rating">3/5</p>
          </li>
          <li>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              cum voluptatem libero distinctio deserunt? Mollitia eveniet
              quibusdam consectetur suscipit atque fugiat doloremque illo quas
              recusandae ratione amet, ipsam facere repudiandae?
            </p>
            <p className="review-rating">3/5</p>
          </li>
          <li>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              cum voluptatem libero distinctio deserunt? Mollitia eveniet
              quibusdam consectetur suscipit atque fugiat doloremque illo quas
              recusandae ratione amet, ipsam facere repudiandae?
            </p>
            <p className="review-rating">3/5</p>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default Trail
