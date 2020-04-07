import React from 'react'
import HelloWorld from '../components/HelloWorld'
import '../styles/home-page.scss'

const HomePage = () => {
  return (
    <main className="home-section">
      <h1>Hello World, This is fine</h1>
      <h2>How is your quarantine going?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        laboriosam natus cumque dolore minus pariatur. Voluptas, voluptatem. In
        ratione consequuntur cupiditate, quibusdam maxime totam dolorem
        provident, tenetur, perferendis dolor deserunt?
      </p>
      <ul>
        <li className="image-card">
          <img src="https://placekitten.com/400/400" alt="" />
          <h2>Checkout my adorable cat</h2>
          <p>My Fluffy is so crazy</p>
          <time>a few seconds ago</time>
        </li>
      </ul>
    </main>
  )
}

export default HomePage
