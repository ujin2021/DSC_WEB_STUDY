const first = () => {
    const greet = 'Hi'
    const second = () => {
        alert(greet)
    }
    return second
}

const newFunc = first()
newFunc()

// Closures - a function ran, the fuction executed. It's never going to execute again.
// But it's going to remember that ther are references to those variables
// so the child scope always has access to the parent scope
// child 는 parent에 접근가능하지만 parent는 child에 접근불가

// Currying 한번에 하나의 매개변수만 허용하도록
const multiply = (a, b) => a * b
const curriedMultiply = (a) => (b) => a * b
const multiplyBy5 = curriedMultiply(5) // a = 3, b = 4
// multiplyBy5(10) 25
// multiplyBy5(11) 55

// Compose
const compose = (f, g) => (a) => f(g(a))
const sum = (num) => num + 1
compose(sum, sum)(5) // f = sum, g = sum, a = 5
// g(a) == g(5) == 6, f(g(a)) == f(g(5)) == f(6) == 7

// Avoiding Side Effect, functional purity
let a = 1
function b() {
    a = 2 // 함수 안이아니라 함수 밖에 영향을 미친다
}