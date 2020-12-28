### Async Await(비동기-요청과 결과가 동시에 일어나지 않는)

* ES8의 일부
* promise 기반으로 구축
* code를 읽기 쉽게한다

``` js
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))

async function playerStart() {
    const firstMove = await movePlayer(100, 'Left') // pause
    await movePlayer(400, 'Left') // pause
    await movePlayer(10, 'Right') // pause
    await movePlayer(330, 'Left') // pause
}
```

``` js
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
}

fetchUsers() // pending.. -> data
```

``` js
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]
Promise.all(urls.map(url => {
    return fetch(url).then(res => res.json())
})).then(results => {
    console.log('users', results[0])
    console.log('posts', results[1])
    console.log('albums', results[2])
}).catch(() => console.log('error')) 

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => 
            fetch(url).then(res => res.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('album', albums)
    } catch (e){
        console.log(e)
    }   
}

getData() // 위의 Promise .then 구문과 output이 같음
```