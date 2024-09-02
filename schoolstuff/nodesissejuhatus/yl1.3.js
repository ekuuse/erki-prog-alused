const readline = require('node:readline');
let alus 
let astendaja

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('sisestage astme alus:', num => {
    alus = num
    rl.question('sisestage astme astendaja:', num => {
        astendaja = num
        console.log(alus ** astendaja)
        rl.close()
    })
})