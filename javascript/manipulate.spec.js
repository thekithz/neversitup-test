// Write your test here
const {manipulate} = require('./manipulate')

const testText1 = 'a'
const testText2 = 'ab'
const testText3 = 'abc'
const testText4 = 'aabb'
const testText5 = 'aa bb'

/** Round 1 **/
const result1 = manipulate(testText1)
console.log('Final1: ', result1)

/** Round 2 **/
const result2 = manipulate(testText2)
console.log('Final2: ',result2)

/** Round 3 **/
const result3 = manipulate(testText3)
console.log('Final3: ',result3)

/** Round 4 **/
const result4 = manipulate(testText4)
console.log('Final4: ',result4)

/** Round 5 **/
const result5 = manipulate(testText5)
console.log('Final5: ',result5)