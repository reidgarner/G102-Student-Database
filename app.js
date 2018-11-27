const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const queries = require('./queries')

app.get('/', (req, res) => {
    queries.getAll().then(response => res.send(response))
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})