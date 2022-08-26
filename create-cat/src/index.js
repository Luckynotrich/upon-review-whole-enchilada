const postCat = require('./post_cat.js')
const stringArray = require('./string-array.js')

// eslint-disable-next-line camelcase
module.exports = function createCat () {
  const name = document.getElementById('name').value
  if (!name) {
    alert('Please enter a name')
    return true
  } else {
    const nodePros = document.querySelectorAll('input.pro')
    const nodeCons = document.querySelectorAll('input.con')
    
    const stringPros = stringArray(nodePros)
    const stringCons = stringArray(nodeCons)

    postCat(name, stringPros, stringCons)
  }

  return false
}
