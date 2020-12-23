// reference type (참조 타입)

console.log([] === []) // false -> 첫번째  [] array는 하나의 box1(객체1)을 생성, 두번째 []는 하나의 box2(객체2)를 생성
console.log([1] === [1]) // false

let object1 = { value : 10 }
let object2 = object1
let object3 = { value : 10 }

console.log(object1 === object2) // true
console.log(object1 === object3) // false

object1.value = 15
console.log(object1.value) // 15
console.log(object2.value) // 15
console.log(object3.value) // 10

// object1, 2는 같은 객체를 가리키고 있다({value : 10}이라는 객체)

// context vs scope
// console.log(this) //  chrome console에서 실행 시 Window 객체가 출력
// console.log(this === window) // true (chrome 에서)
// this.alert("hello") // chrome 창에서 alert 발생

/*
function a() {
    console.log(this)
}
a() //  window 객체 출력
window.a() //  window 객체 출력
*/

const object4 = {
    a : function() {
        console.log(this)
    }
}
object4.a() // object4를 출력

// instantiation - 개체의 여러 복사본을 만들 수 있다
class Player {
    constructor(name, type) { // syntax, 생성자
        console.log('player', this)
        this.name = name
        this.type = type
    }
    introduce() {
        console.log(`Hi I a ${this.name}, I'm a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) { // 확장할 때마다 player의 consructor 함수를 호출한다
        super(name, type)
        console.log('wizard', this) // super을 부르기전에 this를 참조하면 참조오류가 발생
    }
    play() {
        console.log(`WEEEEE I'm a ${this.type}`)
    }
}

const wizard1 = new Wizard('Shelly', 'Healer')
const wizard2 = new Wizard('Shawn', 'Dark Magic')
wizard1.play()
wizard2.introduce()