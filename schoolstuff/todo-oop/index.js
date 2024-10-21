import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

app.listen(3000, () => {
    console.log("http://localhost:3000")
})

app.get('/json-test', (req,res) => {
    res.send({
        message: 'json test ok'
    })
})