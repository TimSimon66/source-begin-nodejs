const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Nothing")
})

router.get('/product', (req, res) => {
    res.send("show Product")
})

router.get('/friends', (req, res) => {
    res.send("Freinds")
})

router.get('/:id', (req, res) => {
    res.send("User have id " + req.params.id)  // để cái id này phía sau friends và product, lỡ khi người dùng nhập http://localhost:3005/api/v1/product
    // thì sẽ result là User have id product
})

module.exports = router

