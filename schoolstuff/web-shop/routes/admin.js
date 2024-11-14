const express = require('express')

const router =  express.Router()
const bookControllerClass = require('../controllers/book')

const bookController = new bookControllerClass()

router.post('/create', (req,res) => bookController.createNewbook(req,res))
router.put('/edit/:id', (req,res) => bookController.updatebook(req,res))
router.delete('/delete/:id', (req,res) => bookController.deletebook(req,res))

router.get('/', (req,res,next) =>{
    bookController.getAllbooksAdmin(req,res)
})
router.get('/editproduct/:id', (req,res,next) =>{
    bookController.editbookAdmin(req,res)
})
router.get('/createproduct', (req,res,next) =>{
    res.render('admincreate')
})

module.exports = router