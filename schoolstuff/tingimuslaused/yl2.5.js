const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let filesize = 0;
let pealkiri = "";
let hasfile = false;

const CheckSpam = () => {
    if (filesize > 1 || pealkiri == "" || hasfile === true) {
        console.log("spam detected")
    }
    else {
        console.log("not spam")
    }
    rl.close()
}

const AskFile = () => {
    rl.question('kas kirjas on fail? (jah/ei): ', value => {
        if (value === "jah") {
            hasfile = true
        }
        else if (value === "ei") {
            hasfile = false
        }
        else {
            return AskFile()
        }
        CheckSpam()
    })
}

const AskPK = () => {
    rl.question('mis on kirja pealkiri? : ', value => {
        pealkiri = value
        AskFile()
    })
}

const AskSize = () => {
    rl.question('mis on kirja suurus? (MB) : ', value => {
        filesize = Number(value)
        AskPK()
    })
}

AskSize()