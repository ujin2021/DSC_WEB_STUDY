// pass by value

let a = 5 // 5의 메모리 주소
b = a
b++
console.log(a) // 5
console.log(b) // 6, copy value, 새 메모리 공간에 값을 넣었다 => pass by value(단순 복사)

// pass by reference

let obj1 = {name: 'Yao', password : '123'}
let obj2 = obj1

obj2.password = 'easyPeasy'

console.log(obj1) // { name: 'Yao', password: 'easyPeasy' }
console.log(obj2) // { name: 'Yao', password: 'easyPeasy' }
/*
메모리에 객체가 저장되고, 참조로 전달된다
obj1, obj2가 메모리의 어딘가를 가리킨다
obj2 = obj1 : obj1이 가리키는 객체의 메모리의 주소를 obj2에 넣은것이다
단점 : 다른사람이 변경하면 모두 바뀐다.
*/

let c = [1, 2, 3, 4, 5]
let d = c
d.push(6)
console.log(d)
console.log(c) // array는 object이기 때문에 pass by reference가 된다 

// 객체의 사본을 만들고 싶을 때 (pass by value)
let e = [1, 2, 3, 4, 5]
d = [].concat(e)
console.log(d) // [1, 2, 3, 4, 5]
d.push(7)
console.log(d) // [ 1, 2, 3, 4, 5, 7 ]
console.log(e) // [1, 2, 3, 4, 5] 
// 객체(array)의 복사본을 만들고 push 했기 때문에 원본은 바뀌지않음

let obj = {a : 'a', b : 'b', c : 'c'}
let obj3 = obj // pass by reference(same obj를 가리킨다. obj 내용이 바뀌면 같이 바뀜)
let clone = Object.assign({}, obj) // copy obj, pass by value
let clone2 = {...obj} // 확산 연산자, pass by value

obj.c = 5
console.log(obj)
console.log(obj3)
console.log(clone) // 원래의 obj 내용을 가지고 있다
console.log(clone2)

let obj4 = {
    a : 'a', 
    b : 'b', 
    c : {
        deep : 'try and copy me' // 객체 안에 객체가 존재
    }
}
let obj5 = {...obj4} // clone (shallow copy)
let superClone = JSON.parse(JSON.stringify(obj4)) // deep clone

obj4.c.deep = 'hahaha'
console.log(obj4)
console.log(obj5) // clone 했지만 c.deep 의 내용이 변경됨 => shallow clone
console.log(superClone) // deep clone