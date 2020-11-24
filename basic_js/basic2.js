// Object properties

// ex1
const obj = {
    player: 'boby',
    experience: 100,
    wizardLevel: false
}

const player = obj.player
const experience = obj.experience
let wizardLevel = obj.wizardLevel

const { plyaer, experience } = obj
let { wizardLevel } = obj

// ex2
const a = 'Simon'
const b = true
const c = {}

const obj2 = {
    a,
    b,
    c
}

// Template strings
const name = "Sally"
const age = 34
const pet = "horse"

const greeting = "Hello" + name + " you seem to be " + age + "!"
const greetingBest = `Hello ${name} you seem to be ${age}. What a lovely ${pet} What you have!`

function greet(name='', age=30, pet='cat')