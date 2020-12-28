const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 3000)) // 3초 후 resolve
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 3000)) // 3초 후 reject

Promise.all([promiseOne, promiseTwo]).then(data => console.log(data)) // users:1 Uncaught (in promise)
    .catch(e => console.log('error', e)) // 모든 promise가 resolve되어야 한다

Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data)) 
    .catch(e => console.log('error', e)) // reject되든 안되든 실행됨
/*
0: {status: "fulfilled", value: undefined}
1: {status: "rejected", reason: undefined}
*/

