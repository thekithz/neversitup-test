/**
 * 
 * @param {string[]} texts list of string [":)", ":(", ":>"]
 * @returns {number} amount of smily face detected
 */
const countSmileyFace = (arrSmileys) => {
    if (arrSmileys.length <= 0) return 0

    const typeSmileys = [':~)', ':-)', ':~D', ':-D', ':)', ':D', ';-)', ';~)', ';~D', ';-D', ';)', ';D']

    let total = 0
    for (let i in arrSmileys) {
        const smile = arrSmileys[i]
        if (typeSmileys.some((f) => f === smile)) {
            total++
        }
    }
    return total
}

module.exports = {
    countSmileyFace
}