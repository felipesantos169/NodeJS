const express = require('express')
const app = express()

app.get('/felipe', (req, res) => {
    res.send('Hello World')
})

app.post('/hudson', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log('Server running')
})