// application packages
const express = require('express')
const app = express()

const path = require('path')

// add template engine, ?
const hbs = require('express-handlebars')
//setup template engine directory and files extensions
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
}))
// setup static public dir
app.use(express.static('public'))
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

const articleRoutes = require('./routes/article')

app.use('/', articleRoutes)
app.use('/article', articleRoutes)
app.use('/author', articleRoutes)

// app starts here
app.listen(3000, () => {
    console.log("app: http://localhost:3000")
})