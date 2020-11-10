let database = [ // info of users
    {
        username : 'youjin',
        password : 'supersecret'
    },
    {
        username : 'sally',
        password : '123'
    },
    {
        username : 'ingrid',
        password : '777'
    }
]

let newsFeed = [
    {
        username : 'Bobby',
        timeline : 'So tired from all that learning'
    },
    {
        username : 'Sally',
        timeline : 'Javascript is sooo coool!'
    },
    {
        username : 'Mitch',
        timeline : 'Javascript is pretty coool!'
    }
]

// accept user input
let userNamePrompt = prompt(`What's your username?`)
let passwordPrompt = prompt(`What is your password?`)

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if(database[i].username === username && database[i].password === password) {
            return true
        }
    }
    return false
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed)
    } else {
        alert(`Sorry, wrong username and pasasword!`)
    }
}

signIn(userNamePrompt, passwordPrompt)