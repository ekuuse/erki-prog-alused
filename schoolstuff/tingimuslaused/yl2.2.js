const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const CheckFamily = (name) => {
    if (name.slice(-2) === "ne"){
        return console.log('abielus')
    }
    else if (name.slice(-2) === "te"){
        return console.log('vallaline')
    }
    else if (name.slice(-1) === "e" && !name.slice(-2) === "ne" && !name.slice(-2) === "te"){
        return console.log('unassigned')
    }
    else {
        return console.log('pole leedulanna')
    }
}

rl.question('sisesta perekonna nimi: ', name => {
    CheckFamily(name)
    rl.close()
})