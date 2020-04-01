import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

const Trail = props => {
  const { trail } = props
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
        ></textarea>
        <h2>rate it!</h2>
        <button>1</button>
        <button>3</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
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
