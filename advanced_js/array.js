const array = [1, 2, 10, 16]
const double = []
const newArray = array.forEach((num) => {
    double.push(num * 2)
})

console.log('forEach', newArray) // [2, 4, 20, 32]

// map, filter, reduce
const mapArray = array.map((num) => {
    return num * 2 // map always has return value or [undefined, undefined, '' ,'']
})

console.log('map', mapArray)