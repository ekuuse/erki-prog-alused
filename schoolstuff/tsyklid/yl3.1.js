const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('sisestage mitu korda aratada: ', val => {
    for (let i = 0; i < val; i++) {
        console.log("Touse ja sara!")
    }
    rl.close()
})