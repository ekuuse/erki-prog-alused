const express = require('express')

const router =  express.Router()

router.get('/', (req,res,next) =>{
    res.send('<b>admin</b>')
})

module.exports = router