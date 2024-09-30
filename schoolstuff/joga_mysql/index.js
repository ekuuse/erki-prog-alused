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

app.get('/author/:id',(req, res) => {
    let query = `SELECT * FROM article WHERE author_id = ?`
    let articles = []
    con.query(query, [req.params.id], (err,result) => {
        if (err) throw err
        articles = result
        console.log(articles)
        con.query(`SELECT * FROM author WHERE id = ?`, [req.params.id], (err,aresult) => {
            if (err) throw err
            let author = aresult[0]
            res.render('index', {
                title: author.name,
                articles: articles
            })
        })
    })
})

// app starts here
app.listen(3000, () => {
    console.log("app: http://localhost:3000")
})