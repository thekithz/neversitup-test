// Write your test here
const {countSmileyFace} = require('./smily')

const testArraySmileys1 = [':)', ';(', ';}', ':-D']
const testArraySmileys2 = [';D', ':-(', ':-)', ';~)']
const testArraySmileys3 = [';]', ':[', ';*', ':$', ';-D']

/** Round 1 **/
const result1 = countSmileyFace(testArraySmileys1)
console.log('Final1: ', result1)

/** Round 2 **/
const result2 = countSmileyFace(testArraySmileys2)
console.log('Final2: ', result2)

/** Round 3 **/
const result3 = countSmileyFace(testArraySmileys3)
console.log('Final3: ', result3)
