const readline = require('node:readline');
let isik = null;
let kiirus = null;
let kiirusover = null;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const ArvutaTrahv = () => {
    const calculated = (kiirusover-kiirus)*3
    if (calculated >= 190){
        return 190
    }
    return calculated
}

rl.question('sisestage nimi:', nimi => {
    isik = nimi
    rl.question('sisestage lubatud kiirus:', num => {
        kiirus = num
        rl.question('sisestage yletatud kiirus:', num => {
            kiirusover = num
            console.log(`${isik}, teie trahv kiirustamise eest on: ${ArvutaTrahv()} eurot`)
            rl.close()
        })
    })
})