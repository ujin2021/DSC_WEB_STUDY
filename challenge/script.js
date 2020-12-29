const fs = require('fs')
let total = 0

function question1() {
        fs.readFile('./input.txt', (err, data) => {
        console.time('funchallenge')
        const input = data.toString()
        for (let i of input) {
            if(i === '(') {
                total += 1
            } else {
                total -= 1
            }
        }
        console.timeEnd('funchallenge')
        console.log('floor : ', total)
    })
}

question1()

// array reduce를 사용할 수 있다

// https://adventofcode.com/2015의 1번문제