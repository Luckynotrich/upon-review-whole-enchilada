/**
 *
 * @param {array of values from html form elements} arr
 * @returns array of string id pairs
 */
module.exports = function PairArray(arr) {
    const pairArr = []

    arr.forEach((currentValue) => {
        const val = currentValue.value.toString()
        if (val.length > 0) {
            let pair = new Object()
            pair.value = val
            pair.id = Math.floor(Math.random() * 1000000)

            pairArr.push(pair)
        }
    })

    return pairArr
}
