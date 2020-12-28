// Object spread operator
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2, 
    bird : 40 // 추가
}

// const { tiger, ...rest } = animals

// tiger : 23
//rest : {lion: 5, monkey: 2}

const array = [1, 2, 3, 4, 5]
function sum(a, b, c, d, e) {
    return a + b + c + d + e
} 

sum(...array) // 15, same as sum(1, 2, 3, 4, 5)

function objectSpread(p1, p2, p3) {
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

const { tiger, lion, ...rest } = animals
objectSpread(tiger, lion, rest)