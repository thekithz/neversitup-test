// Write your test here
const {findOddNumber} = require('./odd-number');

const testNums1 = [7]
const testNums2 = [0]
const testNums3 = [1,1,2]
const testNums4 = [0,1,0,1,0]
const testNums5 = [1,2,2,3,3,3,4,3,3,3,2,2,1]
const testNums6 = [1,2,2,3,3,3,5,6,7,7,7,7,8,3,1]

/** Round 1 **/
const result1 = findOddNumber(testNums1)
console.log('Final1: ', result1)

/** Round 2 **/
const result2 = findOddNumber(testNums2)
console.log('Final2: ', result2)

/** Round 3 **/
const result3 = findOddNumber(testNums3)
console.log('Final3: ', result3)

/** Round 4 **/
const result4 = findOddNumber(testNums4)
console.log('Final4: ', result4)

/** Round 5 **/
const result5 = findOddNumber(testNums5)
console.log('Final5: ', result5)

/** Round 6 **/
const result6 = findOddNumber(testNums6)
console.log('Final6: ', result6)
