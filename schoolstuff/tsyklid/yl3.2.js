const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let porgand = 0;

rl.question('sisestage ringide arv: ', val => {
    const toloop = Number(val) + 1
    for (let i = 0; i < toloop ; i++) {
        if (i % 2 === 0) {
            porgand += Number(i)
        }
    }
    console.log(`porgandite koguarv on: ${porgand}`)
    rl.close()
})