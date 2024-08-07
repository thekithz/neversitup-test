/**
 * 
 * @param {string} text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
const manipulate = (text ) => {
    const totalText = text.length

    if (totalText === 1) {
        return [text]
    }

    const textSplit = text.replace(/\s+/g, '').replace(/[^a-zA-Z]/g, '').split('')
    const forCollectText = text.replace(/\s+/g, '').replace(/[^a-zA-Z]/g, '').split('')
    const result = []

    for (let i = 0; i < textSplit.length; i++) {
        let newTextSplit = textSplit
        const collectText = forCollectText.shift()
        newTextSplit = newTextSplit.filter((_, index) => index !== i)
        for (let j = 0; j < newTextSplit.length; j++) {
            const s = collectText + newTextSplit.join('')
            result.push(s)
            const sSub = newTextSplit.shift()
            newTextSplit.push(sSub)
        }
    }

    return [...new Set(result)].sort()
}

module.exports = {
    manipulate
}