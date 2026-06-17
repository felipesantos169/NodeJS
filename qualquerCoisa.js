const express = require('express')
const app = express()
app.use(express.json())

app.get('/felipe/', (req, res) => {
    const dados = req.body
    console.log(dados)
    res.send(req.params.nome)
})

app.post('/hudson', (req, res) => {
    res.send('HEHE')
})

app.listen(3000, () => {
    console.log('Server running')
})