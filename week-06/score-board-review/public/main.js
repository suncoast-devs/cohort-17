const updateTeam1Name = () => {
  // value vs textContext vs innerHTML
  // get what the user typed in
  const teamName = document.querySelector('.team-1-input').value
  // update the H1 with the new content
  document.querySelector('.team-1-name').textContent = teamName
  document.querySelector('.team-1-name').innerHTML = teamName
  // clear the textbox
  document.querySelector('.team-1-input').value = ''
}

const addOneToTeam1Score = () => {
  const currentScore = parseInt(
    document.querySelector('.team-1-score').textContent
  )
  const newScore = currentScore + 1
  document.querySelector('.team-1-score').textContent = newScore
  if (newScore >= 4) {
    //disable all the buttons
    const allButtons = document.querySelectorAll('button')
    console.log(allButtons)
    // for (let i = 0; i < allButtons.length; i++) {
    //   const button = allButtons[i]
    //   button.disabled = true
    // }
    allButtons.forEach(button => {
      button.disabled = true
    })
  }
}

const reset = () => {
  const allButtons = document.querySelectorAll('button')
  console.log(allButtons)
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].disabled = false
  }
}

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeam1Name)

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addOneToTeam1Score)
