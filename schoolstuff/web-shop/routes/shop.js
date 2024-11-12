const express = require('express')

const router =  express.Router()

const bookControllerClass = require('../controllers/book')
const bookController = new bookControllerClass()

router.get('/', (req,res,next) =>{
    bookController.getAllbooks(req,res)
})

module.exports = router