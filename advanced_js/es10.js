// .flat(), .flatMap()
// .flat(default = 1), .flat(n) : n번 flat 하고싶다
const array = [1, 2, 3, 4, 5]
console.log(array.flat()) // [1, 2, 3, 4, 5]

const array2 = [1, [2, 3], [4, 5]] // nested array
console.log(array2.flat()) // [1, 2, 3, 4, 5]

const array3 = [1, 2, [3, 4, [5]]] 
console.log(array3.flat()) // [1, 2, 3, 4, [5]]
console.log(array3.flat(2)) // [1, 2, 3, 4, 5]

const jurassicPark = [['1', '2', '3', '4', [[['5']]]], ['6', '7'], [['8']]] // 5번 공룡이 너무 세서 격리 시켜둠
console.log(jurassicPark.flat(50)) // 최대 50

const entries = ['bob', 'sally',,,,,'cindy']
console.log(entries.flat()) // 빈 data를 삭제해준다

const jurassicParkChaos = jurassicPark.flatMap(creature => creature += '5')
console.log(jurassicParkChaos) // flatMap 의 결과의 깊이는 1

// trim 
const userEmail = '         eddytheeagle@gmail.com'
const userEmail2 = 'jonnydangerous@gmail              '
console.log(userEmail.trimStart()) // trim beginning(앞의 공백 삭제)
console.log(userEmail2.trimEnd()) // trim end(뒤의 공백 삭제)

// fromEntries
userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]]
obj = Object.fromEntries(userProfiles)
console.log(obj) // object로 변경
console.log(Object.entries(obj)) // 다시 원래로 복구

// try, catch
try { // try this
    bob + 'hi'
} catch(e) { // If there are errors
    console.log('you messed up' + e)
}