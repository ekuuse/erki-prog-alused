import fs from 'node:fs/promises'
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    next()
})

app.get('/expenses', async (req, res) => {
   const fileContent = await fs.readFile('./data/expenses.json')
   const expensesData = JSON.parse(fileContent)
   res.status(200).json({expenses: expensesData})
})

app.listen(3005, () => {
    console.log('backend server connected')
})