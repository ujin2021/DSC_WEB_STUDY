/*
// 여기서는 지금 안되고 f12 -> console에서 입력 후 확인
document.getElementsByTagName('h1')
document.getElementsByClassName('second')
document.getElementById('first') // <p id="first">Get it done today</p>

document.querySelector('h1') // <h1>Shopping List</h1>
document.querySelector('li') // <li random="23">Notebook</li> 제일 첫번째만 선택됨
document.querySelectorAll('li') // 모든 li
document.querySelectorAll('li, h1') // 모든 li and h1

document.querySelector('li').getAttribute('random') // 23, 하나를 고른 후 attribute를 뽑아낼 수 있다
document.querySelector('li').setAttribute('random', '1000') // 23이 1000으로 변경

// CHANGING STYLE
document.querySelector('h1').style.background = 'yellow' // change background color

let h1 = document.querySelector('h1')
h1.className = 'coolTitle'

document.querySelector('li').classList // li tag의 class list를 보여준다
document.querySelector('li').classList.add('done')
document.querySelector('li').classList.toggle('done') // toggle : on/off, 추가했다 지웠다

document.querySelector('h1').innerHTML = '<strong>!!!</strong>'

document.querySelectorAll('li')[1] // <li>Jello</li>
*/
