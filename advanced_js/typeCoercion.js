// 유형 강제
console.log(1 == '1') // true
// == : 단순히 두 값을 비교하고, 유형이 다른경우 하나를 강제한다

console.log(1 === '1') // false
//  === : 두 값을 비교하고, 유형도 같아야함. 항상 === 사용할 것

if(1) { // 1 === true, 0 === false
    console.log(5)
}

console.log(-0 === +0) //true
console.log(Object.is(-0, +0)) // false
console.log(NaN === NaN) // false (NaN : Nat a Number)

// 참고  : https://sdras.github.io/object-explorer/