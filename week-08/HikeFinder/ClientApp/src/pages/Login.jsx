import React, { useState } from 'react'
import axios from 'axios'

import { Redirect } from 'react-router-dom'

const Login = () => {
  const [logInEmail, setLogInEmail] = useState('')
  const [logInPassword, setLogInPassword] = useState('')
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const logUserIntoApi = async () => {
    const resp = await axios.post('/auth/login', {
      email: logInEmail,
      password: logInPassword,
    })
    if (resp.status === 200) {
      console.log(resp.data)
      localStorage.setItem('token', resp.data.token)
      setShouldRedirect(true)
    }
  }

  if (shouldRedirect) {
    return <Redirect to="/my-profile" />
  }
  return (
    <section className="log-in">
      <section>
        <label htmlFor="">Email</label>
        <input
          type="text"
          value={logInEmail}
          onChange={e => setLogInEmail(e.target.value)}
        />
      </section>
      <section>
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={logInPassword}
          onChange={e => setLogInPassword(e.target.value)}
        />
      </section>
      <button onClick={logUserIntoApi}>Sign up!</button>
    </section>
  )
}

export default Login
