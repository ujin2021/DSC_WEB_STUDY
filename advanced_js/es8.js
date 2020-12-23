// new in es8
// 1. 문자열 padding - .padStart, .padEnd()
console.log('Turtle'.padStart(10)) // 문자열 앞에 10칸
console.log('Turtle'.padEnd(10)) // 문자열 뒤에 10칸

const fun = (a, b, c, d, ) => {
    console.log('a', a) // 1
}

console.log('fun', fun(1, 2, 3, 4, )) // 끝에 , 를 사용해도 에러가 나지 않는다

// Object.values, Object.entries, Object.keys => object를 배열처럼 사용할 수 있게 한다

let obj = {
    username0 : 'Santa', 
    username1 : 'Rudolf',
    username2 : 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key])
    console.log(index)
})

Object.values(obj).forEach(value => {
    console.log(value) // Santa, Rudolf, Mr.Grinch
})

Object.entries(obj).forEach(value => {
    console.log(value)
})

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '') 
    // value[1] : Santa, Rudolf, Mr.Grinch
    // value[0] : username0, username1, username2
    // -> username 을 공백으로
})
// ['Santa0', 'Rudolf1', 'Mr.Grinch2']