const main = () => {}

const playerSelectedRock = () => {
  console.log('player selected rock')
  const options = ['rock', 'paper', 'scissors']
  // pick a random selection
  const randomNumber = Math.floor(Math.random() * options.length)
  const cpuPick = options[randomNumber]

  console.log(cpuPick)
  if (cpuPick === 'scissors') {
    console.log('rock beats scissors')
    document.querySelector('.game-result').textContent =
      'Rock beats scissors, player wins'
    document.querySelector('.game-result').classList.toggle('winner')
    document.querySelector('.game-result').classList.remove('loser')
  } else if (cpuPick === 'rock') {
    console.log('tied')
    document.querySelector('.game-result').textContent =
      'Rock ties rock, tie game'
  } else if (cpuPick === 'paper') {
    console.log('paper beats rock, cpu wins')
    document.querySelector('.game-result').textContent =
      'Paper beats rocks, cpu wins'
    document.querySelector('.game-result').classList.add('loser')
    document.querySelector('.game-result').classList.remove('winner')
  }

  // display the player selection
  // clear out result
  document.querySelector('.player-choice').textContent = ''
  // create a new <img>
  const imgTag = document.createElement('img')
  // set the src
  imgTag.src = '/images/rock.png'
  // add the image to the DOM
  document.querySelector('.player-choice').appendChild(imgTag)
  // display the cpu selection
  const parent = document.querySelector('.cpu-choice')
  parent.textContent = ''
  const cpuImgTag = document.createElement('img')
  // cpuImgTag.src = '/images/' + cpuPick + '.png'
  cpuImgTag.src = `/images/${cpuPick}.png`
  parent.appendChild(cpuImgTag)
  // display who won
}

document.addEventListener('DOMContentLoaded', main)
document
  .querySelector('.rock-button')
  .addEventListener('click', playerSelectedRock)
