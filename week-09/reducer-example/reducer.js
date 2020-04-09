// Thanks: https://www.random.org/integers/?num=45&min=1&max=100&col=1&base=10&format=html&rnd=new
// prettier-ignore
const numbers = [
  49, 30, 4, 48, 2, 46, 88, 59, 96, 14, 30, 84, 6, 17, 61, 90, 7, 30, 43,
  40, 35, 65, 90, 20, 46, 50, 56, 59, 47, 85, 100, 36, 88, 86, 52, 19, 4,
  91, 38, 98, 1, 17, 38, 18, 27, 60, 95, 26, 100, 17, 10, 40, 58, 6, 1, 19,
  78, 58, 41, 53, 22, 77, 82, 8, 14, 71, 62, 48, 9, 46, 63, 19, 83, 18, 18,
  99, 69, 43, 24, 30, 51, 85, 60, 74, 44, 76, 7, 62, 44, 51, 8, 87, 34, 100,
  12, 23, 48, 38, 29, 16,
]

let manualTotal = 0
numbers.forEach((number) => {
  manualTotal += number
})
console.debug(manualTotal)

const reducerTotal = numbers.reduce((totalSoFar, number) => {
  // return the new totalSoFar
  return totalSoFar + number
}, 0)
console.log(reducerTotal)

initialState = { total: 0, evenCount: 0, oddCount: 0 }
const numberStatistics = numbers.reduce((statisticsSoFar, number) => {
  const newTotal = statisticsSoFar.total + number
  // If this number is even, the new even count is the old even count + 1
  // otherwise the new even count is just the old even count
  const newEvenCount = number % 2 === 0 ? statisticsSoFar.evenCount + 1 : statisticsSoFar.evenCount
  const newOddCount = number % 2 !== 0 ? statisticsSoFar.oddCount + 1 : statisticsSoFar.oddCount

  // return a new object that has { total: __, evenCount: __, oddCount: __}
  return { total: newTotal, evenCount: newEvenCount, oddCount: newOddCount }
}, initialState)
console.debug(numberStatistics)
//
