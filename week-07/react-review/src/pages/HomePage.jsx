import React, { useState } from 'react'
import HelloWorld from '../components/HelloWorld'

import items from '../data/grocery-items.json'

const HomePage = () => {
  const [groceryItems, setGroceryItems] = useState(items)
  const [searchFilter, setSearchFilter] = useState('')
  const [newItemName, setNewItemName] = useState('')
  const [newItemQuantity, setNewItemQuantity] = useState(0)

  const updateSearchFilter = e => {
    setSearchFilter(e.target.value)
  }

  const updateNewItemName = e => {
    setNewItemName(e.target.value)
  }

  const updateNewItemQuantity = e => {
    setNewItemQuantity(e.target.value)
  }

  const addItemToList = e => {
    e.preventDefault()
    // take the old grocery list
    // add an item to that list

    const newList = [
      ...groceryItems,
      { name: newItemName, quantity: newItemQuantity },
    ]

    // update the state hook
    setGroceryItems(newList)
  }

  const deleteItem = (item, index) => {
    console.log('deleting an item', item)
    // splice(index to start, how many to remove)
    const newList = [...groceryItems]
    newList.splice(index, 1)
    setGroceryItems(newList)
  }

  const otherDelete = e => {
    console.log(e.target.value)
  }

  return (
    <>
      <h1>Groceries</h1>
      <input
        type="search"
        placeholder="search your list"
        onChange={updateSearchFilter}
      />
      <ul>
        {groceryItems
          .filter(item => {
            return item.name.toLowerCase().includes(searchFilter.toLowerCase())
          })
          .map((item, index) => {
            console.log('got here', item)
            return (
              <li>
                <p>{item.name}</p>
                <p>{item.quantity}</p>
                <button>got it</button>
                <button onClick={() => deleteItem(item, index)}>delete</button>
                <button onClick={otherDelete} value={index}>
                  other delete
                </button>
              </li>
            )
          })}
      </ul>
      <form onSubmit={addItemToList}>
        <input
          type="text"
          placeholder="what to want"
          onChange={updateNewItemName}
        />
        <input
          type="number"
          placeholder="how many?"
          onChange={updateNewItemQuantity}
        />
        <button>ADD</button>
      </form>
    </>
  )
}

export default HomePage
