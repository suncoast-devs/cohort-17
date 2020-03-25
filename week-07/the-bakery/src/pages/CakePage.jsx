import React from 'react'

import Cake from '../components/Cake'

const CakePage = () => {
  return (
    <>
      <h1>Home made specialty cakes</h1>
      <h2>hand made with love and icing. lots of icings</h2>
      <ul>
        <Cake
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP9CquUTD-ynFzZ40gDaA8UfOi_uSpaCbZuQNCva79thuYCLsPyA"
          name="Unicorn Cake"
          numberInStock="1"
        />
        <Cake
          image="https://aclassictwist.com/wp-content/uploads/2014/08/Birthday-Ice-Cream-Cake-480x360.jpg"
          name="Birthday Cake"
          numberInStock="55"
        />
        <Cake
          image="https://i.kym-cdn.com/photos/images/newsfeed/000/115/357/portal-cake.jpg?1318992465"
          name="It's a Lie Cake"
          numberInStock="47"
        />
      </ul>
    </>
  )
}

export default CakePage
