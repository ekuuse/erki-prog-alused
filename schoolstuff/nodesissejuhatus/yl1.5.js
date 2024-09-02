const readline = require('node:readline');
let ainepunktid = null; 
let nadalad = null;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const ArvutaAjakulu = (apa, nadal) => {
    return Math.round((apa * 26) / nadal)
}

rl.question('sisestage ainepunktide arv:', num => {
    ainepunktid = num
    rl.question('sisestage n2dalate arv:', num => {
        nadalad = num
        console.log(ArvutaAjakulu(ainepunktid, nadalad))
        rl.close()
    })
})