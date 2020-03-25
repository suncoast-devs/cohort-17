import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
import Page2 from './pages/Page2'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import CakePage from './pages/CakePage'
import PiePage from './pages/PiePage'
import CategoryPage from './pages/CategoryPage'

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/pies" className="pie-link">
              Pies
            </Link>
          </li>
          <li>
            <Link to="/cakes">Cakes</Link>
          </li>
          <li>
            <Link to="/cookies">Cookies</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        {/* <Route exact path="/cakes" component={CakePage}></Route>
        <Route exact path="/pies" component={PiePage}></Route> */}
        <Route exact path="/:category" component={CategoryPage} />
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
