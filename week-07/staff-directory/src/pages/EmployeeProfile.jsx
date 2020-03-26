import React, { useEffect, useState } from 'react'
import axios from 'axios'

const EmployeeProfile = props => {
  const employeeId = props.match.params.employeeId

  const [info, setInfo] = useState({})

  const getEmployeeInformation = async () => {
    const resp = await axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/honeydukes/Employees/${employeeId}`
    )
    console.log(resp.data)
    setInfo(resp.data)
  }

  useEffect(() => {
    getEmployeeInformation()
  }, [])
  return (
    <div>
      Employee page for {info.firstName} {info.lastName}! He is working as{' '}
      {info.jobTitle}
    </div>
  )
}

export default EmployeeProfile
