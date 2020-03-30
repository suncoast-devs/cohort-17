import React, { useState } from 'react'
import axios from 'axios'

const AddTrail = () => {
  const [trail, setTrail] = useState({})

  const updateTrialData = e => {
    const key = e.target.name
    const value = e.target.value
    setTrail(prevTrail => {
      prevTrail[key] = value
      return prevTrail
    })
  }

  const addTrailToApi = async () => {
    console.log('adding', trail)
    const resp = await axios.post('/api/trails', trail)
    if (resp.status === 201) {
      // do something something else
    } else {
      // do something else here
    }
  }

  return (
    <>
      <main>
        <section>
          <label htmlFor="">Name</label>
          <input type="text" name="name" onChange={updateTrialData} />
        </section>
        <section>
          <label htmlFor="">Description</label>
          <input type="text" name="description" onChange={updateTrialData} />
        </section>
        <section>
          <label htmlFor="">Grade</label>
          <input type="text" name="grade" onChange={updateTrialData} />
        </section>
        <section>
          <label htmlFor="">Route Type</label>
          <input type="text" name="routeType" onChange={updateTrialData} />
        </section>
        <section>
          <label htmlFor="">Address</label>
          <input type="text" name="address" onChange={updateTrialData} />
        </section>
        <section>
          <label htmlFor="">City</label>
          <input type="text" name="city" onChange={updateTrialData} />
        </section>
        <section>
          <label htmlFor="">State</label>
          <input type="text" name="state" onChange={updateTrialData} />
        </section>
        <button onClick={addTrailToApi}>Add trail</button>
      </main>
    </>
  )
}

export default AddTrail
