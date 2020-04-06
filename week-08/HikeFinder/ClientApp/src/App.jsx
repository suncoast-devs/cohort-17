import React, { Component } from 'react'
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

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
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
    )
  }
}
