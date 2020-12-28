### Promise

* 미래에 단일값을 생성할 수 있는 객체
* 가질 수 있는 값 : resolved value, reason that it's no resolved(rejected)
* state : fullfilled, rejected, pending
* callback과 동일한 목적 수행

``` js
const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve('Stuff Worked')
    } else {
        reject('Error, it broke')
    }
})

promise.then(result => console.log(result)) // Stuff Worked

promise
    .then(result => result + '!') 
    .then(result2 => {
        throw Error
        console.log(result2)
    })
    .catch(() => console.log('Error!')) // Error(throw Error 했기 때문에)

promise
    .then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('Error!'))
    .then(result3 => console.log(result3 + '!')) // Stuff Worked!?! catch는 error가 없으면 실행되지 않음
    // 만약 result3 받는 부분에서 throw Error을 한다면 catch의 Error가 실행되는게 아니라 콘솔에서 에러남
    // catch는 catch이전의 오류만 잡는다

```

* promise는 async programming에 적합하다

``` js
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hiii')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Pookie')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Hehe')
})

Promise.all([promise2, promise3, promise4])
    .then (values => {
        console.log(values) // 모두 실행되는데 4100ms 걸린다
    })
// 다시 Promise.all을 실행하면 바로 출력된다(이미 실행했기 때문에)
```

``` js
// url from : 
const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/users'
]
Promise.all(urls.map(url => {
    return fetch(url).then(res => res.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error')) // url 에 오타가 있었을 때
```