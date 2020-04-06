import React, { useState } from 'react'
import axios from 'axios'

import { Redirect } from 'react-router-dom'

const SignUp = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const sendNewUserToApi = async () => {
    // add extra validation logic here
    const resp = await axios.post('/auth/signup', {
      fullName: fullName,
      email: email,
      password: password,
    })
    console.log(resp.data)
    if (resp.status === 200) {
      // store the token in session or localstorage
      localStorage.setItem('token', resp.data.token)
      // sessionStorage.setItem('session-token', resp.data.token)
      //????? redirect the user to their profile page
      setShouldRedirect(true)
    }
  }

  if (shouldRedirect) {
    return <Redirect to="/my-profile" />
  }

  return (
    <section className="sign-up">
      <h1>Create a new Account</h1>
      <section>
        <label htmlFor="">Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
        />
      </section>
      <section>
        <label htmlFor="">Email</label>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </section>
      <section>
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </section>
      <button onClick={sendNewUserToApi}>Sign up!</button>
    </section>
  )
}

export default SignUp
