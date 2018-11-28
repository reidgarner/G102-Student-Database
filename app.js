const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const queries = require('./queries')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())


app.get('/', (req, res) => {
    queries.getAll().then(response => res.send(response))
})

app.get('/:id', (req, res) => {
    queries.getById(req.params.id).then(students => res.send(students))
})

app.post('/', (req, res) => {
    queries.createStudent(req.body).then(students => res.send(students[0]))
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})