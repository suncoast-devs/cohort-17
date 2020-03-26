import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Employee from '../components/Employee'

const HomePage = () => {
  // state ={
  //   employeers: []
  // }
  const [employees, setEmployees] = useState([])

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

  useEffect(() => {
    console.log('effectively like a component did mount')
    getAllEmployees()
  }, [])
  return (
    <>
      <header>
        <h1>Honeydukes Staff</h1>
      </header>
      <main>
        <header>Current Employees</header>
        <ul>
          {employees.map(employee => {
            return (
              <Employee
                key={employee.id}
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
