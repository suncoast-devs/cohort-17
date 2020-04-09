import React, { useState, useCallback, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import Search from './pages/Search'
import NotFound from './pages/NotFound'
import AddTrail from './pages/AddTrail'
import './custom.css'
import TrailDetails from './pages/TrailDetails'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import MyProfile from './pages/MyProfile'
import axios from 'axios'
import { UserProfileContext } from './components/UserProfileContext'

const App = () => {
  const [user, setUser] = useState({})
  const token = localStorage.getItem('token')

  const reloadUser = useCallback(() => {
    axios
      .get('/api/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        const user = response.data
        setUser(user)
        console.debug('loaded the user', user)
      })
  }, token)

  // Any time the token changes, load the user
  useEffect(() => {
    reloadUser()
  }, [token])

  // The data the context will keep track of and provide
  const contextObject = { user: user, reloadUser: reloadUser }

  return (
    <UserProfileContext.Provider value={contextObject}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/my-profile"
            render={() => {
              if (localStorage.getItem('token')) {
                return <MyProfile />
              } else {
                return <Redirect to="/login" />
              }
            }}
          />
          <Route exact path="/search" component={Search} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/add" component={AddTrail} />
          <Route exact path="/trail/:trailId" component={TrailDetails} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Layout>
    </UserProfileContext.Provider>
  )
}

export default App
