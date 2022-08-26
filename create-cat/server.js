const open = require('open')
const express = require('express')
const path = require('path')

const logger = require('./middleware/logger.js')

const app = express()
const PORT = process.env.PORT || 8080

app.use('/favicon.ico', express.static('./favicon.ico'))

app.use(logger)

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

// express.static(root, [options])
app.use(express.static(path.resolve(__dirname, './dist')))

// Category api routes
app.use('/api/categories', require('./routes/api/categories'))
app.use('/api/catDb', require('./routes/api/cat-db-api'))

// start the server
app.listen(
  PORT,
  console.log(`Something awesome is happening at http://localhost:${PORT}`)
);

(async () => { await open('http://localhost:' + PORT + '/', { app: { name: 'google-chrome' } }) })()
