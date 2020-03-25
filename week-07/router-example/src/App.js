import React, { Component } from 'react'

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import HomePage from './components/HomePage'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import BlogPage from './components/BlogPage'

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            {/* <a href="/about">About</a> */}
          </li>
          <li>
            <Link to="/about">About</Link>
            {/* <a href="/about">About</a> */}
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/blog" component={BlogPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
