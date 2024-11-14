const express = require('express')

const router =  express.Router()

const bookControllerClass = require('../controllers/book')
const bookController = new bookControllerClass()

router.put('/addcart', (req,res) => bookController.addItemToCart(req,res))
router.post('/purchase', (req,res) => bookController.purchasefromCart(req,res))
router.delete('/removecart/:productId/:userId', (req,res) => bookController.removefromCart(req,res))

router.get('/', (req,res,next) =>{
    req.session.userId = 1;
    bookController.getAllbooksCart(req,res)
})

module.exports = router