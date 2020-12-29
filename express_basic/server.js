// npm install express
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false})) // middleware (form)
app.use(bodyParser.json()) // middleware (json)
app.get('/', (req, res) => {
    res.send('test')
})

app.get('/profile', (req, res) => {
    res.send('profile test')
})

app.post('/profile', (req, res) => {
    console.log(req.body)
    res.send('success')
})

app.listen(3000)