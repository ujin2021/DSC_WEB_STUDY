const basket = ['appples', 'oranges', 'grapes']
const detailedBasket = {
    'apples' : 5,
    'oranges' : 10,
    'grapes' : 1000
}
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i])
}

// for each
basket.forEach(item => {
    console.log(item)
})

// for of
// iterating : 하나씩 이동하여 항목을 살펴보는 것
// js에서 iterable type : string, array
// for of 에서 detailedBasket을 사용하면 error
for (item of basket) {
    console.log(item)
}

// for in - properties
// enumerating
// js에서 enumerable : object
for (item in detailedBasket) {
    console.log(item)
}

for (item in basket) {
    console.log(item)
}
// 0 1 2
/*
basket = {
    0 : 'apples,
    1 : 'oranges',
    2 : 'grapes'
}
로 생각할 수 있다
*/