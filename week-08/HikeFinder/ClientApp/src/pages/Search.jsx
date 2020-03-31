import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const searchForTrails = async () => {
    const resp = await axios.get(`/api/search/trails?searchTerm=${searchTerm}`)
    console.log(resp.data)
  }

  return (
    <>
      <section className="search-container">
        <input
          type="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button onClick={searchForTrails}>Search</button>
      </section>
      <main>
        <ul></ul>
        <section className="no-results-message">
          No trail found. <Link to="/add">Add a new one?</Link>
        </section>
      </main>
    </>
  )
}

export default Search
