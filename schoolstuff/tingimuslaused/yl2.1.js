const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const CheckTemp = (temp) => {
    if (temp > 4){
        return console.log('oues ei ole jaatumisohtu')
    }
    return console.log('oues on jaatumisoht!')
}

rl.question('sisesta ohutemperatuur: ', temp => {
    CheckTemp(temp)
    rl.close()
})