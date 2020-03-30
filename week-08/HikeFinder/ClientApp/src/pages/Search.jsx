import React from 'react'

import { Link } from 'react-router-dom'

const Search = () => {
  return (
    <>
      <section className="search-container">
        <input type="search" />
        <button>Search</button>
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
