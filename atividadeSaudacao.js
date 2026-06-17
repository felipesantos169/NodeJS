const express = require('express')
const app = express()
app.use(express.json())

app.get('/saudacao/:nome', (req, res) => {
    res.send('Olá, ' + req.params.nome)
})

app.post('/saudacao', (req, res) => {
    const dados = req.body
    console.log(dados)
    if(dados.nome === '' && dados.idade <= 0){
        res.send('Erro! campos invalídos')
    }
    else if(dados.idade <= 0) {
        res.send('Erro! campo idade invalído.')
    }
    else if(dados.nome === ''){
        res.send('Erro! campo nome invalído.')
    }
    else if(dados.idade >= 18) {
        const classificacao = 'maior de idade'
        res.send(`Olá ${dados.nome}, você é ${classificacao}`)
    }
    else {
        classificacao = 'menor de idade'
        res.send(`Olá ${dados.nome}, você é ${classificacao}`)
    }
})

app.listen(3000, () => {
    console.log('Server running')
})