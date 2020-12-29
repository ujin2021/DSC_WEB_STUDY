// $ node script.js
// import largeNumber from './script2'
// const script2 = require('./script2.js') // common node syntax
import { largeNumber } from './script2.js' // package.js의 type을 module로 설정

const a = largeNumber
const b = 6

console.log(a + b)
// console.log(__dirname)

// window : terminal(node)에서는 x
// global : browser에서는 x
// globalThis : terminal(node)에서도, browser에서도 o