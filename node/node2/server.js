// npm start (package.json에 start:nodemon으로 해놓았기 때문에)
// nodemon keep listening
const http = require('http')

const server = http.createServer((req, res) => {
    // console.log('I hear you') // localhost:3000에 접속하면 terminal에 log가 찍힌다
    // console.log('headers', req.headers)
    console.log('method', req.method)
    console.log('url', req.url)

    const user = {
        name: 'John',
        age: '23'
    }
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(user))
})

server.listen(3000) // port번호는 아무거나해도 된다
