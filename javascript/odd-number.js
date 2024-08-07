/**
 *
 * @param {number[]} numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns {number} one number that odd number
 */
const findOddNumber = (nums) => {
  const newArr = nums
  const keys = [...new Set(newArr)]

  let arrModel = keys.reduce((acc, key) => {
    acc.push({[key]: 0})
    return acc
  }, [])

  for (const num of nums) {
    for (let i in arrModel) {
      if (arrModel[i].hasOwnProperty(num)) {
        arrModel[i][num] += 1
      }
    }
  }

  for (const model of arrModel) {
    for (let key in model) {
      if (model[key] % 2 !== 0) {
        return Number(key)
      }
    }
  }
}

module.exports = {
  findOddNumber
}