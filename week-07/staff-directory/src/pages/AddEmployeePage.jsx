import React, { useState } from 'react'

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

  return (
    <>
      <div>
        <header>Hire a new Employee</header>
      </div>
      <main>
        <form>
          <section>
            <p>First Name</p>
            {/*  onChange={firstNameChangedEvent} */}
            <input type="text" name="firstName" onChange={handleInputChange} />
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
            <input type="tel" name="phoneNumber" onChange={handleInputChange} />
          </section>
          <section>
            <p>Interesting Fact</p>
            <input
              type="text"
              name="interestingFact"
              onChange={handleInputChange}
            />
          </section>
        </form>
      </main>
    </>
  )
}

export default AddEmployeePage
