const axios = require('../node_modules/axios')

// eslint-disable-next-line no-unused-vars
function postCat (name, pros, cons) {
  axios.post('http://localhost:8080/api/categories?', {
    name, pros, cons
  })
    .then(res => {
      if (!res.ok) {
        return null
      }
    })
    .catch((e) => {
      console.log('ERROR ERROR', e, 'ERROR ERROR')
    })
}
module.exports = postCat
