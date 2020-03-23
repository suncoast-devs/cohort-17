import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

import axios from 'axios'

class App extends Component {
  state = {
    searchTerm: '',
    temp: null,
    condition: null,
    isLoading: false,
  }

  updateSearchTerm = e => {
    this.setState({
      searchTerm: e.target.value,
    })
  }

  searchForWeather = async () => {
    // do the API call out to the weather Api
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchTerm}&appid=5c418bd61b262dfeab5ee02852a70c07&units=imperial`
    console.log(this.state.searchTerm, url)

    // axios.get(url).then(resp => {
    //   console.log(resp)
    //   const condition = resp.data.weather[0].main
    //   const temp = resp.data.main.temp
    //   console.log(`${temp} and ${condition}`)
    // })

    const resp = await axios.get(url)
    console.log(resp)
    const condition = resp.data.weather[0].main
    const temp = resp.data.main.temp
    console.log(`${temp} and ${condition}`)
    this.setState({
      temp: temp,
      condition: condition,
    })
  }

  render() {
    return (
      <>
        <main>
          <h1>Find your city</h1>
          <input
            onChange={this.updateSearchTerm}
            type="search"
            placeholder="Look up your city"
          />
          <button onClick={this.searchForWeather}>SEARCH</button>
        </main>
        <section>
          {this.state.temp !== null && this.state.condition !== null ? (
            <p>
              {this.state.temp}° and {this.state.condition}
            </p>
          ) : (
            <></>
          )}
        </section>
      </>
    )
  }
}

export default App
