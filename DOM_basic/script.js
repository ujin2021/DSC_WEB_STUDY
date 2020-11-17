let button = document.getElementById("enter")
let input = document.getElementById("userinput")
let ul = document.querySelector("ul")

function inputLength() {
    return input.value.length
}

function createListElement() {
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(input.value)) // li 태그 밑에는 text가 있다
    ul.appendChild(li)
    input.value = "" // 입력한게 계속 남아있지 않게 하려고
}

function addListAfterClick() {
    if(inputLength() > 0) { // 아무것도 입력하지 않으면 추가되면 안됨
        createListElement()
    }
}

function addListAfterKeypress(event) {
    if(inputLength() > 0 && event.keyCode === 13) { // keyCode 13 : enter
        createListElement()
    }
}

button.addEventListener("click", addListAfterClick())

input.addEventListener("keypress", addListAfterKeypress)