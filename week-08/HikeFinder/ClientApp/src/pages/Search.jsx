import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import EmptyTrailList from '../components/EmptyTrailList'
import TrailList from '../components/TrailList'
const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const searchForTrails = async () => {
    const resp = await axios.get(`/api/search/trails?searchTerm=${searchTerm}`)
    console.log(resp.data)
    setResults(resp.data)
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
        {results.length > 0 ? (
          <TrailList results={results} />
        ) : (
          <EmptyTrailList />
        )}
      </main>
    </>
  )
}

export default Search
