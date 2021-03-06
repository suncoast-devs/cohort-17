import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import AddEmployeePage from './pages/AddEmployeePage'

import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import EmployeeProfile from './pages/EmployeeProfile'

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">VIEW ALL </Link>
            </li>
            <li>
              <Link to="/add">ADD</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/add" component={AddEmployeePage}></Route>
        <Route
          exact
          path="/employee/:employeeId"
          component={EmployeeProfile}
        ></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
