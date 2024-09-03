const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let age = null;
let gender = null;
let traintype = null;

let maxpossiblepulse = null;
let minpulse = 0;
let maxpulse = 0;

const CalculatePulse = () => {
    if (gender === "n") {
        maxpossiblepulse = 206 - (age * 0.88)
    }
    else {
        maxpossiblepulse = 220 - age
    }
    if (traintype === 1) {
        minpulse = maxpossiblepulse * 0.5
        maxpulse = maxpossiblepulse * 0.7
    }
    else if (traintype === 2) {
        minpulse = maxpossiblepulse * 0.7
        maxpulse = maxpossiblepulse * 0.8
    }
    else if (traintype === 3) {
        minpulse = maxpossiblepulse * 0.8
        maxpulse = maxpossiblepulse * 0.87
    }
    console.log(`sinu pulss peaks olema vahemikus ${Math.round(minpulse)}-${Math.round(maxpulse)}`)
    rl.close()
}

const AskTrainingType = () => {
    console.log('1 - tervisetreening, 2 - põhivastupidavuse treening, 3 - intensiivne aeroobne treening')
    rl.question('sisesta treeningutyyp: ', value => {
        if (value > 0 && value < 4) {
            traintype = Number(value)
            CalculatePulse()
        }
        else {
            console.log('tundmatu treeningutyyp!')
            return AskTrainingType()
        }
    })
}

const AskGender = () => {
    rl.question('sisesta sugu: ', value => {
        if (value.toLowerCase() === "m" || value.toLowerCase() === "n") {
            gender = value
            AskTrainingType()
        }
        else {
            console.log('tundmatu sugu!')
            return AskGender()
        }
    })
}

const AskAge = () => {
    rl.question('sisesta vanus: ', value => {
        if (value > 0 || value < 111) {
            age = value
            AskGender()
        }
        else {
            console.log('sobimatu vanus!')
            return AskAge()
        }
    })
}

AskAge()