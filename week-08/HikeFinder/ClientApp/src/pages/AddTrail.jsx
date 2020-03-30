import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const AddTrail = () => {
  const [trail, setTrail] = useState({})
  const [wasSuccessfullyCreated, setWasSuccessfullyCreated] = useState({
    shouldRedirect: false,
    newTrailInformation: {},
  })

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
      setWasSuccessfullyCreated({
        shouldRedirect: true,
        newTrailInformation: resp.data,
      })
    } else {
      // do something else here
    }
  }

  if (wasSuccessfullyCreated.shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: `/trail/${wasSuccessfullyCreated.newTrailInformation.id}`,
          state: { trail: wasSuccessfullyCreated.newTrailInformation },
        }}
      />
    )
  } else {
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
}

export default AddTrail
