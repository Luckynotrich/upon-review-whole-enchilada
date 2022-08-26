/**
 *
 * @param {array of values from html form elements} arr
 * @returns string array
 */
module.exports = function StringArray (arr) {
  const stringArr = []

  arr.forEach((currentValue) => {
    const pro = currentValue.value.toString()
    if (pro.length > 0) {
      stringArr.push(pro)
    }
  })

  return stringArr
}
