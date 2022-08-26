const axios = require('axios')

// eslint-disable-next-line no-unused-vars
function postReview (revName, revURL, revDate, revRating, reviewTxt,propArray) {
  axios.post('http://localhost:8080/api/reviews?', {
    revName, revURL, revDate, revRating, reviewTxt,propArray
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
module.exports = postReview
