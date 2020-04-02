import React, { useState } from 'react'
import axios from 'axios'

export function Home() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [logInEmail, setLogInEmail] = useState('')
  const [logInPassword, setLogInPassword] = useState('')

  const [token, setToken] = useState('')

  const sendNewUserToApi = async () => {
    // add extra validation logic here
    const resp = await axios.post('/auth/signup', {
      fullName: fullName,
      email: email,
      password: password,
    })
    console.log(resp.data)
  }

  const logUserIntoApi = async () => {
    const resp = await axios.post('/auth/login', {
      email: logInEmail,
      password: logInPassword,
    })
    console.log(resp.data)
    setToken(resp.data.token)
  }

  const getSecretInformation = async () => {
    const resp = await axios.get('/api/secret', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    console.log(resp.data)
  }

  return (
    <div>
      <section>
        <h2>Test authnication</h2>
        <button onClick={getSecretInformation}>Test</button>
      </section>

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
    </div>
  )
}
