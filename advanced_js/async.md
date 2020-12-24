### js의 내부 동작 원리

#### What is program

* allocate memory : 메모리를 할당. 그렇지 않으면 변수를 가질 수 없다
* parse and execute : script 구문을 분석하고 실행
* chorme의 v8 엔진은 js를 읽는다
* 엔진은 memory heap과 call stack을 가지고 있다
* const a = 1라는 변수를 할당하면 js엔진이 기억한다(memory heap 사용)
* Memory leak : memory는 limited amount. 사용하지 않는 변수로 가득찰 수 있다.(global variable)
* call stack : 실행을 할 것을 stack에 쌓고, 실행되면 pop

``` javascript
console.log('1') // call stack : 1 -> pop(실행)
console.log('2') // call stack : 2 -> pop(실행)
console.log('3') // call stack : 3-> pop(실행)
'1'
'2'
'3'

```

```  javascript
const one = () => {
    const two = () => {
        console.log('4')
    }
    two()
}

one() // 4

// call stack
/*
console.log('4') // top . two 에서 console.log()를 실행시키므로 쌓인다 -> 실행됨(pop)
two() //  one에서 two를 부르니까 two 가 쌓인다 -> pop
one() // one을 불렀으니까 call stack에 가장먼저 쌓인다 -> pop
*/
```

#### About Javascript

* js는 single <strong> thread language & nonblocking </strong>
* 하나의 call stack을 가진다(다른 언어는 여러 call stack을 가질 수 있다 - multi thread)
* single thread로 설계된 이유 : multi thread에서의 복잡한 시나리오를 다룰 필요 없다(deadlock과 같은)
* synchronous promramming : stack의 top이 실행된 후, 밑에꺼가 실행되고, ... 차례대로 실행됨(첫번째가 끝날 때 까지 다음꺼는 실행불가) => stack overflow 발생할 수 있다 
* 만약 첫번째가 매우 실행되는데 오래걸린다면? 그것이 끝날 때 까지 기다려야 하므로 시간낭비
* js는 asynchronous 
* call stack, web api, callback queue, event loop 

``` javascript
console.log('1') // call stack에 들어가고, 실행됨(pop)
setTimeout(() => { // web api라고 생각해보자. web api에 setTimeout() 들어감 -> 2초를 기다린다 -> pop
    console.log('2') //  2초를 기다리고 보니 안에 console.log(2)가 있다. -> callback queue 에 넣는다
}, 2000) // 2초 후 실행함(2000ms)
console.log('3') // call stack에 들어가고 실행됨(pop)
// event loop 가 call stack에 empty 인 것을 확인 -> callback queue확인 -> callback함수를 call stack에 넣는다
// call stack에 있는 것을 실행(console.log('2'))

// 1 3 2
// 2의 기다리는 시간이 0이더라도 똑같이 동작하므로 실행결과는 1 3 2
```

#### synchronous vs asynchronous

* synchronous
    * 선생님께 질문하기 위해 전화를 한다.
    * 선생님이 전화를 받을 때 까지 나는 아무것도 할 수 없다

* asynchronous
    * 선생님께 질문하기 위해 쪽지를 남긴다
    * 선생님이 시간이 있을 때 쪽지를 확인하고 나에게 대답한다(callback)
    * 나는 쪽지를 보내놓고 다른일을 할 수 있다

* DOM에서의 addEventListener가 callback함수에 해당한다(기다리고 있다가, 이벤트 발생시 알려준다)
