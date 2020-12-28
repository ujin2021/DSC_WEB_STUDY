// finally
const urls = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/people/4'
]

Promise.all(urls.map(url => {
    return fetch(url).then(people => people.json())
}))
    .then(array => {
        throw Error
        console.log('1', array[0])
        console.log('1', array[1])
        console.log('1', array[2])
        console.log('1', array[3])
    })
    .catch(err => console.log('error'))
    .finally(() => console.log('extra'))

// for await of

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

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

// const loopThroughUrls = url => {
//     for (url of urls) {
//         console.log(url)
//     }
// }

const getData2 = async function() { // getData와 같은 역할
    const arrayOfPromises = urls.map(url => fetch(url)) // fetch url의 list : iterable
    for await (let request of arrayOfPromises) {
        const data = await request.json() // await를 붙여야 함
        console.log(data)
    }
}