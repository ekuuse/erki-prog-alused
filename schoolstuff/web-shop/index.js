const express = require('express')
const session = require('express-session');
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
    secret: 'ok', // Replace with a secure, random secret in production
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false , maxAge: 10000000 } // Set to true if using HTTPS
}));

const db = require('./utils/db')

db.execute('SHOW DATABASES')
    .then(result => {
        console.log(result)
    })

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const cartRoutes = require('./routes/cart')
const accRoutes = require('./routes/account')

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use('/cart', cartRoutes)
app.use('/account', accRoutes)

app.use((req, res, next) => {
    res.status(404).render('notfound')
    console.log('stupid tried finding no page')
})

app.listen(3005, () => {
    console.log('http://localhost:3005')
})