const array = [1, 2, 10, 16]

// 방법1
const double = [] // array를 const로 만들어서 요소를 변경할 수 없으므로 새로운 array를 만들고, push 한다
const newArray = array.forEach((num) => {
    double.push(num * 2)
})

console.log('forEach', newArray) // [2, 4, 20, 32]

// map
const mapArray = array.map((num) => {
    return num * 2 // 1 * 2를 반환하고, 다음 num = 2로 넘어간다
    // map은 array를 변형한다. 항상 return 값이 있다
    // return을 사용하지 않으면 [undefined, undefined, '' ,'']
})

const mapArray2 = array.map(num => num * 2) // 간결하게 사용가능

console.log('map', mapArray)
console.log('map2', mapArray2)
console.log('real array', array) // [1, 2, 10, 16]

// filter 

const filterArray = array.filter(num => {
    return num > 5 // true인 것만 return
})

const filterArray2 = array.filter(num => num === 5)

console.log('filter', filterArray)
console.log('filter2', filterArray2)

// reduce
const reduceArray = array.reduce((acc, num) => { // acc : accumulator : 발생하는 정보 저장, num : array 원소
    return acc + num // array 모든 원소값 더하기
}, 0) // 0 : acc initialize value

console.log('reduce', reduceArray)

