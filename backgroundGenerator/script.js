// import { without } from 'lodash'
// console.log(without)
let _ = require('lodash')
console.log(_)

let array = [1, 2, 3, 4, 5, 6, 7, 8]
console.log('answer', _.without(array, 3)) // array에서 3을 없앤다
let css = document.querySelector("h3")
let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2")
let body = document.getElementById("gradient")

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
    // 위에 마지막에  ;붙이면 작동안됨.
    // 내 생각인데 원래 css에서 background : 어쩌구; 이렇게 하는데 여기선 background = 라고 쓰니까
    // 뭔가 대입느낌으로 딱 값만 넣어줘야 해서 그런것 같음
    css.textContent = body.style.background + ';' 
}

// setGradient()라고 적으면 html에서 script 태그를 읽을때부터 setGradient()를 읽고 실행해버린다
// input이 있을 때 만 실행하게 하기위해서 () 적지 않는다

// html에 oninput=setGradient()를 넣으면 밑의 함수를 주석처리해도 동작한다
// <input oninput=setGradient() class="color1" type="color" name="color1" value="#00ff00">
color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)