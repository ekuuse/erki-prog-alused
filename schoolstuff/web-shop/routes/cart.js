const express = require('express')

const router =  express.Router()

const bookControllerClass = require('../controllers/book')
const bookController = new bookControllerClass()

router.put('/addcart', (req,res) => bookController.addItemToCart(req,res))
router.delete('/removecart', (req,res) => bookController.removefromCart(req,res))

router.get('/', (req,res,next) =>{
    req.session.userId = 1;
    bookController.getAllbooksCart(req,res)
})

module.exports = router