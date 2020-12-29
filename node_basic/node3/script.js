const fs = require('fs') // filesystem

fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log('error')
    }
    console.log('async', data.toString()) // toString : utf8로 encoding한다
})

const file = fs.readFileSync('./hello.txt')
console.log('sync', file.toString())

// readFile : async(callback function), file읽고 있을테니까 딴거하고 있어
// readFileSync : file읽을테니까 아무것도 하지마

// APPEND
// fs.appendFile('./hello.txt', ' This is so cool!', err => { // 해당파일이 없으면 생성
//     if (err) {
//         console.log(err)
//     }
// }) 

// WRITE
fs.writeFile('./bye.txt', 'sad to see you go', err => {
    if (err) {
        console.log(err)
    }
})

// DELETE
fs.unlink('./bye.txt', err => {
    if (err) {
        console.log(err)
    }
    console.log('Inception')
})