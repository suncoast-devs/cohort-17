const options = ['rock', 'paper', 'scissors']

const main = () => {}

// params: player selection and cpu selection
// output: update the page with the correct message
const endGameLogic = (player, cpu) => {
  if (cpu === 'scissors' && player === 'rock') {
    console.log('rock beats scissors')
    document.querySelector('.game-result').textContent =
      'Rock beats scissors, player wins'
    document.querySelector('.game-result').classList.toggle('winner')
    document.querySelector('.game-result').classList.remove('loser')
  } else if (cpu === 'rock' && player === 'rock') {
    console.log('tied')
    document.querySelector('.game-result').textContent =
      'Rock ties rock, tie game'
  } else if (cpu === 'paper' && player === 'rock') {
    console.log('paper beats rock, cpu wins')
    document.querySelector('.game-result').textContent =
      'Paper beats rocks, cpu wins'
    document.querySelector('.game-result').classList.add('loser')
    document.querySelector('.game-result').classList.remove('winner')
  } else if (cpu === 'scissors' && player === 'paper') {
    console.log('Scissors beats paper')
    document.querySelector('.game-result').textContent =
      'Scissors beats paper, cpu wins'
    document.querySelector('.game-result').classList.add('loser')
    document.querySelector('.game-result').classList.remove('winner')
  } else if (cpu === 'paper' && player === 'paper') {
    console.log('tied')
    document.querySelector('.game-result').textContent =
      'Rock ties rock, tie game'
  } else if (cpu === 'rock' && player === 'paper') {
    console.log('paper beats rock, player wins')
    document.querySelector('.game-result').textContent =
      'Paper beats rocks, cpu wins'
    document.querySelector('.game-result').classList.add('winner')
    document.querySelector('.game-result').classList.remove('loser')
  } else if (cpu === 'scissors' && player === 'scissor') {
    document.querySelector('.game-result').textContent = 'Tie'
  } else if (cpu === 'paper' && player === 'scissor') {
    document.querySelector('.game-result').classList.add('winner')
    document.querySelector('.game-result').classList.remove('loser')
    document.querySelector('.game-result').textContent = 'Scissors beats paper'
  } else if (cpu === 'rock' && player === 'scissor') {
    document.querySelector('.game-result').textContent = 'Rocks beats scissors'
    document.querySelector('.game-result').classList.add('loser')
    document.querySelector('.game-result').classList.remove('winner')
  }
}

const updateSelectionImage = (parentSelector, pick) => {
  // clear out result
  document.querySelector(parentSelector).textContent = ''
  // create a new <img>
  const imgTag = document.createElement('img')
  // set the src
  imgTag.src = `/images/${pick}.png`
  // add the image to the DOM
  document.querySelector(parentSelector).appendChild(imgTag)
}

const getComputerSelection = () => {
  // pick a random selection
  const randomNumber = Math.floor(Math.random() * options.length)
  const cpuPick = options[randomNumber]
  return cpuPick
}

const playGame = playerPicked => {
  console.log('player selected ' + playerPicked)
  const cpuPick = getComputerSelection()
  console.log(cpuPick)
  endGameLogic(playerPicked, cpuPick)

  // display the player selection
  updateSelectionImage('.player-choice', playerPicked)
  updateSelectionImage('.cpu-choice', cpuPick)
}

const playerSelectedRock = () => {
  playGame('rock')
  // display who won
}

const playerSelectedPaper = () => {
  playGame('paper')
}

const playerSelectedScissor = () => {
  playGame('scissor')
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.rock-button').addEventListener('click', () => {
  playGame('rock')
})

document
  .querySelector('.paper-button')
  .addEventListener('click', playerSelectedPaper)
document
  .querySelector('.scissor-button')
  .addEventListener('click', playerSelectedScissor)
