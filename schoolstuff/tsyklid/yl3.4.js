const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let oun = 14;

rl.question('mitu poialpoissi tahab ounu: ', val => {
    for (let i = 1; i < Number(val)+1; i++) {
        const result = Math.floor(Math.random() * 2) + 1
        oun -= result
        console.log(`poialpoiss ${i} sai: ${result} oun(a)`)
    }
    console.log(`lumivalgekesele jai: ${oun} oun(a)`)
    rl.close()
})