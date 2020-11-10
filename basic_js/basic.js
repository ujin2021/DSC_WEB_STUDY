// js는 f12 -> console 탭에서도 실행해 볼 수 있다
// JAVASCRIPT TYPES
// 1. Number
console.log(1 + 1)
console.log(2 - 1)
console.log(1 * 2)
console.log(12 % 5)

// 2. String
console.log('Hello' + 'There') // HelloThere
console.log('This isn\'t very nice') // This isn't very nice
console.log(10 + '34') // 1034
console.log(10 - '3') // 7 (string 끼리 뺄 수 없으므로 숫자로 인식)

// 3. Boolean
console.log(true)
console.log(false)
console.log(3 > 2) // true
console.log(5 > 10) // false
console.log(5 >= 3) // true
console.log(3 === 3) // true, use ===
console.log(3 !== 3) // false

/*
prompt('What is your username?') 입력 창이 뜬다
var first = prompt('enter the first  number') // 1
var second = prompt('enter the second number') // 2
console.log(first) // 1이 프린트됨(string type)
console.log(second) // 2가 프린트 됨(string type)
*/

/*
alert('hi there')

var first = prompt('enter the first  number') // 1
var second = prompt('enter the second number') // 2
var sum = Number(first) + Number(second) // str to num : Number(str)
alert('The sum is' + sum) // The sum is3
*/

// 4. Undefined
let b
console.log(b) // undefined

// 5. Null
let emptyObj = {}
let nullObj = null

console.log(emptyObj)
console.log(nullObj)

// nullObj.name = 'Andy' // null object 에는 추가할 수 없음
emptyObj.name = 'Andy'

// console.log(nullObj)
console.log(emptyObj)

// JAVASCRIPT CONDITIONALS

let name = 'Billy'
// name = 'Suzy'

if (name === 'Billy') {
    console.log('hi Billy')
} else if (name === 'Suzy') {
    console.log('hi Suzy')
} else {
    console.log('I don\'t know you')
}

// JAVASCRIPT LOGICAL OPERATORS

name = 'Billy' // 위에서 이미 let name으로 name을 정의했기 때문에 다시 let name을 쓰면 안된다

if (name === 'Billy' || name === 'Ann') {
    console.log('Hi Billy or Ann')
}

let firstName = 'Bob'
let lastName = 'Smith'

if (firstName === 'Bob' && lastName === 'Smith') {
    console.log('Hi Bob Smith')
}

lastName = 'Chris'

if (!(lastName === 'Smith')) {
    console.log('This is not Smith')
}

// FUNCTION

function sayHello() { // function name is sayHello
    console.log('Hello!')
}

sayHello()

let sayBye = function() { // Anonymous function(함수 이름이 없음)
    console.log('Bye')
}

sayBye()

function sing() {
    console.log('AHHHHHHHHH')
    console.log('TEEEEEEEEE')
}

console.log('------function sing------')
sing()

function sing2() {
    console.log('laaaaaaaa deeeeeee daaaaaaa')
    console.log('laaaaaaaaaaa')
}

console.log('------function sing2------')
sing2()

// sing, sing2 둘다 console.log 사용
//가사가 변경될 때마다 함수를 새로만들거나 함수안의 consol.log안의 인자를 변경해야함 => 인자사용

function singAsong(song) {
    console.log(song)
}

console.log('------function singAsong------')
singAsong('laaaaaa deeeee daaaaa')
singAsong('AHHHHHHHHHH')
singAsong('laaaaaaaaaaa')

function multiply(a, b) {
    if (a > 10 || b > 10) {
        return `That's too hard`
    } else {
        return a * b
    } 
}

console.log('------function multiply------')
console.log(multiply(5, 10)) // 50
console.log(multiply(5, 40)) // That's too hard

// but js에서는 function을 변수로 본다
// parameters : like 4, 5
// arguments :  like a, b

// JAVASCRIPT DATA STRUCTURE

// Array
let list = ['tiger', 'cat', 'bear', 'bird']
console.log(list[0])

let numbers = [1, 2, 3, 4]
let booleans = [true, false, true]
let functions = [function apple() {
    console.log('apple')
}]
let mixedList = ['apple', 3, undefined, true, function apple() {
    console.log('apple')
}]
let list2 = [['tiger', 'cat', 'bear', 'bird']]

console.log(list2[0][0]) // tiger

list.shift() // tiger 삭제
console.log(list) // ['cat', 'bear', 'bird']

list.pop() // bird 삭제 (list의 맨 마지막)
console.log(list) // [ 'cat', 'bear' ]

list.push('elephant')
console.log(list) // [ 'cat', 'bear', 'elephant' ]

console.log(list.concat(['bee', 'deer'])) // [ 'cat', 'bear', 'elephant', 'bee', 'deer' ]
console.log(list) // [ 'cat', 'bear', 'elephant' ]

console.log(list.sort())

let myList = list.concat(['bee', 'deer'])
let myNewList = myList.concat(['monkey'])

console.log(myList)
console.log(myNewList)

// Object
let user = {
    name : 'john',
    age : 34, 
    hobby : 'soccer',
    isMarried : false,
}
console.log(user) // list와는 조금 다름
console.log(user.name)
console.log(user.age)

user.favouriteFood = 'spinach'
console.log(user)

user.isMarried = true
console.log(user)

user.spells = ['abrakadra', 'shazam', 'boo']
console.log(user)
console.log(user.spells[1]) // shazam

let list3 = [
    {
        username : 'andy',
        password : 'secre'
    },
    {
        username : 'jess',
        password : '123'
    }
]
console.log(list3)
console.log(list3[0].password)

user.shout = function() {
    console.log('AHHHHHHHHHH')
}
console.log(user)
console.log(user.shout())

console.log(console) // console도 object이다. object안에 여러 함수가 있음

// JAVASCRIPT LOOPING

// 1. for
let todos = [
    'clean room',
    'brush teeth', 
    'exercise', 
    'study javascript!',
    'eat healthy'
]

for (let i = 0; i < todos.length; i++) {
    todos[i] = todos[i] + '!'
}

console.log(todos)

let todosLength = todos.length
for (let i = 0; i <todosLength; i++) {
    todos.pop()
}
console.log(todos)

// 2. while
let counterOne = 0
while (counterOne < 10) {
    console.log(counterOne)
    counterOne++
}

// 3. do while
let counterTwo = 10
do {
    console.log(counterTwo)
    counterTwo--
} while (counterTwo > 0)

// while 과 do while 차이점

counterOne = 10
while(counterOne < 10) { // 1. 조건을 먼저 확인한다
    console.log('while', counterOne) // 2. 출력한다
    counterOne--
}

counterTwo == 10
do { // 1. 이것을 먼저 실행하고 
    console.log('do while', counterTwo) // 얘만 출력된다.
    counterTwo--
} while (counterTwo > 10) // 2. 조건을 체크한다

// 4. for each
todos = [
    'clean room',
    'brush teeth', 
    'exercise', 
    'study javascript!',
    'eat healthy'
]

todos.forEach(function(i){
    console.log(i)
})

todos.forEach(function(todo, i) {
    console.log(todo, i) // index 와 함께 출력된다
})

function logTodos(todo, i) {
    console.log(todo, i)
}

todos.forEach(logTodos)

var todosImportant = [
    'clean room!',
    'brush teeth!', 
    'exercise!', 
    'study javascript!',
    'eat healthy!'
]
todosImportant.forEach(logTodos)