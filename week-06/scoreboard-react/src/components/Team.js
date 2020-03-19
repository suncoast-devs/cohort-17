import React, { Component } from 'react'

export class Team extends Component {
  state = {
    teamScore: 0,
    teamName: this.props.initialTeamName,
    teamNameInputBox: '',
  }

  // componentDidMount() {
  //   this.setState({
  //     teamName: this.props.initialTeamName,
  //   })
  // }

  addOneToTeamScore = () => {
    this.setState({
      teamScore: this.state.teamScore + 1,
    })
  }

  subtractOneFromTeamScore = () => {
    this.setState({
      teamScore: this.state.teamScore - 1,
    })
  }

  updateTeamName = () => {
    this.setState({
      teamName: this.state.teamNameInputBox,
    })
  }

  trackTeamName = e => {
    console.log(e.target.value)
    this.setState({
      teamNameInputBox: e.target.value,
    })
  }

  render() {
    console.log('rendering page')
    return (
      <>
        <section class="teams">
          <section class="team one">
            <section>
              <h2 class="team-1-name">{this.state.teamName}</h2>
              <p class="team-1-score">{this.state.teamScore}</p>
            </section>
            <section>
              <section>
                update team 1 name
                <input
                  onChange={this.trackTeamName}
                  type="text"
                  class="team-1-input"
                />
                <button
                  class="update-team-1-name"
                  onClick={this.updateTeamName}
                >
                  Update
                </button>
              </section>
              <section>
                update team 1 score
                <button
                  onClick={this.addOneToTeamScore}
                  class="team-1-add-1-button"
                >
                  add 1
                </button>
                <button
                  onClick={this.subtractOneFromTeamScore}
                  class="team-1-subtract-1-button"
                >
                  subtract 1
                </button>
              </section>
            </section>
          </section>
        </section>
      </>
    )
  }
}

export default Team
