import React from 'react'

import data from '../data/bakery-data.json'
import BakeryItem from '../components/BakeryItem'

const CategoryPage = props => {
  // get the category
  const category = props.match.params.category
  // load teh data from somewhere
  const pageData = data.foods[category]
  console.log(pageData)
  // create the jsx
  return (
    <>
      <h1>Category for {category}</h1>
      <h2>{pageData.tagline}</h2>
      <ul>
        {pageData.treats.map((treat, i) => {
          return (
            <BakeryItem
              key={i}
              name={treat.title}
              image={treat.image}
              numberInStock={treat.numberLeft}
            />
          )
        })}
      </ul>
    </>
  )
}

export default CategoryPage
