// ES2020
// BigInt
console.log(typeof 1n) // bigint
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 10) // 9007199254741000 : it doesn't work
console.log(Number.MAX_SAFE_INTEGER + 10 - 1) // 9007199254741000 : it doesn't work
console.log(9007199254740991n + 10n) // 9007199254741001n : it works
console.log(1n + 2n) // 3n : bigint

// Optional Chaining operation ?.
let will_pokemon = {
    pikachu : {
        species : 'Mouse Pokemon',
        height : 0.4,
        weight : 6
    }
}

let andrei_pocketmon = {
    raichu: {
        species : 'Mouse Pokemon',
        height : 0.8,
        weight : 30
    }
}

let weight = will_pokemon.pikachu.weight
console.log('weight', weight) 

// let weight2 = andrei_pocketmon.pikachu.weight
// console.log('weight', weight) // error - andrei doesn't have pikachu

if(andrei_pocketmon.pikachu && andrei_pocketmon.pikachu.weight) {
    let weight3 = andrei_pocketmon.pikachu.weight
} else {
    let weight3 = undefined
    console.log(weight3) // undefined
}

let weight4 = andrei_pocketmon?.pikachu?.weight // ? is there an object? 이 구문으로 위의 if else구문을 간결하게 나타낼 수 있다
console.log(weight4) // undefined(chrome에서 돌아감)

// Nullish Coalescing Operation ??
andrei_pocketmon = {
    pikachu: {
        species : 'Mouse Pokemon',
        height : 0.8,
        weight : 30,
        power : ''
    }
}

let power = andrei_pocketmon?.pikachu?.power || 'no power'// power가 마지막 속성
console.log(power) // lightening. if power : '' or power 속성이 없다 or 0 or false이면  no power로 출력됨

power = andrei_pocketmon?.pikachu?.power ?? 'no power'// no or undefined
console.log(power) // lightening. 만약 power속성이 없다 or '' => no power 
// 0 or false : 0 or false(||를 쓰면 이 두개도 no power로 나온다.)

