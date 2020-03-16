const main = () => {
  console.log('Hello, World')
}

const sum = (x, y) => {
  return x + y
}

const calculateTip = tipAmount => {
  // this is where our code will actually go
  console.log(tipAmount + ' button clicked')
  // get the total from the input box
  const total = document.querySelector('input').value
  console.log(total)
  // calculate a 20% tip
  const tip = total * tipAmount
  // add the tip to the total
  const billTotal = parseFloat(total) + tip
  // total += tip
  console.log(billTotal)
  // print out the total to the DOM
  document.querySelector('.total').textContent = '$' + billTotal.toFixed(2)
}

const calculate20Tip = () => {
  calculateTip(0.2)
}

const calculate15Tip = () => {
  calculateTip(0.15)
}

const calculate18Tip = () => {
  calculateTip(0.18)
}

document.addEventListener('DOMContentLoaded', main)
// Add an event listener
document
  .querySelector('.twentyPercentTip')
  .addEventListener('click', calculate20Tip)
document
  .querySelector('.fifteenPercentTip')
  .addEventListener('click', calculate15Tip)
document
  .querySelector('.eighteenPercentTip')
  .addEventListener('click', calculate18Tip)
