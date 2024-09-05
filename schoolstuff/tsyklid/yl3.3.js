const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('sisestage mitu täringut: ', val => {
    for (let i = 1; i < Number(val)+1; i++) {
        console.log(`täring ${i} veeretas: ${Math.floor(Math.random() * 6)+1}`)
    }
    rl.close()
})