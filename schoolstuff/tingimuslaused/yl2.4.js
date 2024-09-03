const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let loosis = null;
let valisise = null;
let istekoht = null;

const GiveAnswer = () => {
    if (valisise === true) {
        return "jah"
    }
    else {
        return "ei"
    }
}

const WrapUp = () => {
    console.log(`istekoht: ${istekoht} | kas valis koha ise? : ${GiveAnswer()}`)
    rl.close()
}

const AssignSeat = (mode) => {
    if (mode === "ise") {
        valisise = true
        rl.question('kas soovite istuda akna juures v6i mujal? (aken/muu): ', value => {
            if (value.toLowerCase() === "aken" || value.toLowerCase() === "muu") {
                istekoht = value
                WrapUp()
            }
            else {
                console.log('tundmatu istekoht!')
                return AssignSeat(mode)
            }
        })
    }
    else if (mode === "loos") {
        loosis = true
        if (Math.random(1,3) === 1) {
            istekoht = "aken"
        }
        else {
            istekoht = "muu"
        }
        WrapUp()
    }
}

const AskChoice = () => {
    rl.question('kas soovite valida koha ise v6i loosida koha? (ise/loos): ', value => {
        if (value === "ise" || value === "loos") {
            AssignSeat(value)
        }
        else {
            console.log('sobimatu valik!')
            return AskChoice()
        }
    })
}

AskChoice()