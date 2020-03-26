import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Employee from '../components/Employee'

const HomePage = props => {
  // state ={
  //   employeers: []
  // }
  const [employees, setEmployees] = useState([])
  const [message, setMessage] = useState('')

  // componentDiDMount(){

  // }

  const getAllEmployees = async () => {
    // fetch(..).then(resp => resp.json()).then(json => dop the thing)
    // axios.get('...').then(resp => console.log(resp.data))
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/honeydukes/Employees'
    )
    console.log(resp.data)
    setEmployees(resp.data)
  }

  // on page load event
  useEffect(() => {
    console.log('effectively like a component did mount')
    getAllEmployees()
    if (
      props.location.state !== undefined &&
      props.location.state.who !== undefined
    ) {
      const name = props.location.state.who.firstName
      setMessage(`Good news! ${name} was just created`)
    }
  }, [])
  return (
    <>
      <header>
        <h1>Honeydukes Staff</h1>
      </header>
      <section>{message}</section>
      <main>
        <header>Current Employees</header>
        <ul>
          {employees.map(employee => {
            return (
              <Employee
                key={employee.id}
                id={employee.id}
                fullName={`${employee.firstName} ${employee.lastName}`}
                jobTitle={employee.jobTitle}
              />
            )
          })}
        </ul>
      </main>
    </>
  )
}

export default HomePage
