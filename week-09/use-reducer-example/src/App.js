import React, { useReducer } from 'react'
import inventory from './inventory.json'

const App = () => {
  const initialState = {
    inventory: inventory,
    cart: [],
  }

  // state is the current value of our state object
  // action is the data we received from our dispatch
  const reducerFunction = (state, action) => {
    console.log(action)

    switch (action.type) {
      case 'ADD':
        // This is the code for a dispatched ADD
        return {
          inventory: state.inventory.filter(
            (inventoryItem) => inventoryItem.id !== action.item.id
          ),
          cart: [...state.cart, action.item],
        }
        break

      case 'REMOVE':
        // This is the code for a dispatched REMOVE
        return {
          inventory: [...state.inventory, action.item],
          cart: state.cart.filter((cartItem) => cartItem.id !== action.item.id),
        }
        break

      default:
        // Returns a new COMPLETE state
        // or I could throw an error
        return state
    }
  }

  const [state, dispatch] = useReducer(reducerFunction, initialState)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <a className="navbar-brand" href="/">
          useReducer Example
        </a>
      </nav>
      <main className="container-fluid">
        <div className="row">
          <section className="col-4">
            <div className="card">
              <div className="card-header">
                Cart <span className="float-right">{state.cart.length}</span>
              </div>
              <ul className="list-group">
                {state.cart.map((item) => (
                  <li key={item.id} className="list-group-item">
                    <span
                      className="add-remove"
                      onClick={() => dispatch({ type: 'REMOVE', item: item })}
                    >
                      -
                    </span>{' '}
                    {item.name}
                    <span className="badge badge-secondary float-right">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="col-4">
            <div className="card">
              <div className="card-header">
                Inventory
                <span className="float-right">{state.inventory.length}</span>
              </div>
              <ul className="list-group">
                {state.inventory.map((item) => (
                  <li key={item.id} className="list-group-item">
                    <span
                      className="add-remove"
                      onClick={() => dispatch({ type: 'ADD', item: item })}
                    >
                      +
                    </span>{' '}
                    {item.name}
                    <span className="badge badge-secondary float-right">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
