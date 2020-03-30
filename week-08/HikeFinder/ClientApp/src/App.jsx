import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import Search from './pages/Search'
import NotFound from './pages/NotFound'
import AddTrail from './pages/AddTrail'
import './custom.css'
import TrailDetails from './pages/TrailDetails'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/add" component={AddTrail} />
          <Route exact path="/trail/:trailId" component={TrailDetails} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Layout>
    )
  }
}
