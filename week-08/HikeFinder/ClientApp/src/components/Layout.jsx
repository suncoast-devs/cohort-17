import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { NavMenu } from './NavMenu'

export function Layout(props) {
  return (
    <div>
      <NavMenu />
      {props.children}
    </div>
  )
}
