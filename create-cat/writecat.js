const fetch = require('node-fetch')

function writeCat (name, stringPros, stringCons) {
  (async () => {
    const rawResponse = await fetch('http://localhost:8080/api/categories?', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, pros: stringPros, cons: stringCons })
    })

    const content = await rawResponse.json()

    console.log(content)
  })()
}
module.exports = writeCat
