const main = () => {
  console.log('Hello, World')
}

const calculateTip = () => {
  // this is where our code will actually go
  console.log('20% button clicked')
  // get the total from the input box
  const total = document.querySelector('input').value
  console.log(total)
  // calculate a 20% tip
  const tip = total * 0.2
  // add the tip to the total
  const billTotal = parseFloat(total) + tip
  // total += tip
  console.log(billTotal)
  // print out the total to the DOM
  document.querySelector('.total').textContent = '$' + billTotal.toFixed(2)
}

document.addEventListener('DOMContentLoaded', main)
// Add an event listener
document
  .querySelector('.twentyPercentTip')
  .addEventListener('click', calculateTip)
