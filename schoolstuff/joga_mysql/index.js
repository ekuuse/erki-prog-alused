// application packages
const express = require('express')
const app = express()

const path = require('path')

const mysql = require('mysql2')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

// create database connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "joga_mysql"
})

con.connect(function(err) {
    if (err) throw err
    console.log("connected to joga_mysql db")
})

// app starts here
app.listen(5023, () => {
    console.log("app: https://localhost:5023")
})