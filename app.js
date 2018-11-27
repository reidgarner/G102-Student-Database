const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('hooray')
})

app.listen(port, () => {
    console.log('listening on ${port}')
})