// npm install express
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false})) // middleware (form)
app.use(bodyParser.json()) // middleware (json)
app.use(express.static(__dirname + '/public')) // static file을 띄운다(public dir안에 있는 index.html)

app.get('/', (req, res) => {
    // console.log(req.query) // ?name=adrei&age=31 -> { name: 'adrei', age: '31' }
    // console.log(req.header)
    // console.log(req.params) // get('/:id'), localhost:3000/2222 => { id: '2222' }
    res.send()
})

app.get('/profile', (req, res) => {
    res.send('profile test')
})

app.post('/profile', (req, res) => {
    console.log(req.body)
    res.send('success')
})

app.listen(3000)