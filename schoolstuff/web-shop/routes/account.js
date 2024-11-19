const express = require('express')

const router =  express.Router()
const bookControllerClass = require('../controllers/book')

const bookController = new bookControllerClass()

router.post('/register', (req,res) => bookController.registerUser(req,res))
router.post('/login', (req,res) => bookController.loginUser(req,res))

router.get('/register', (req,res,next) =>{
    res.render('register')
})

router.get('/login', (req,res,next) =>{
    res.render('login')
})

module.exports = router