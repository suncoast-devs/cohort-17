import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
const AddEmployeePage = () => {
  // state ={
  //   firstNameInputField:''
  // }
  // const [firstName, setFirstName] = useState('')
  // const firstNameChangedEvent = e => {
  //   // this.setState({
  //   //   firstNameInputField: e.target.value,
  //   // })
  //   const fn = e.target.value
  //   setFirstName(fn)
  // }

  const [employee, setEmployee] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const handleInputChange = e => {
    const fieldToUpdate = e.target.name
    const value = e.target.value
    console.log(fieldToUpdate, value)

    // now that we hvae the name and value
    // go the employee in state, and update the key of the field with the new value
    setEmployee(prevEmployee => {
      console.log('before the update', prevEmployee)
      prevEmployee[fieldToUpdate] = value
      console.log('after', prevEmployee)
      return prevEmployee
    })
  }

  const sendEmployeeToApi = async e => {
    e.preventDefault()
    const resp = await axios.post(
      'https://sdg-staff-directory-app.herokuapp.com/api/honeydukes/Employees',
      employee
    )
    console.log(resp)
    if (resp.status === 200) {
      // redirect page to the home
      // BONUS can we diplay a success message
      setShouldRedirect(true)
    } else {
      //display an error message
    }
  }

  if (shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: '/',
          state: { who: employee },
        }}
      />
    )
  } else {
    return (
      <>
        <div>
          <header>Hire a new Employee</header>
        </div>
        <main>
          <form onSubmit={sendEmployeeToApi}>
            <section>
              <p>First Name</p>
              {/*  onChange={firstNameChangedEvent} */}
              <input
                type="text"
                name="firstName"
                onChange={handleInputChange}
              />
            </section>
            <section>
              <p>Last Name</p>
              <input type="text" name="lastName" onChange={handleInputChange} />
            </section>

            <section>
              <p>Job Title</p>
              <input type="text" name="jobTitle" onChange={handleInputChange} />
            </section>
            <section>
              <p>Phone</p>
              <input
                type="tel"
                name="phoneNumber"
                onChange={handleInputChange}
              />
            </section>
            <section>
              <p>Interesting Fact</p>
              <input
                type="text"
                name="interestingFact"
                onChange={handleInputChange}
              />
            </section>
            <button>Add employee</button>
          </form>
        </main>
      </>
    )
  }
}

export default AddEmployeePage
