const express = require('express')
const app = express()
const port = 3005
var router1 = require('./apiRouter.js')

app.use('/api/v1/', router1)

app.get('/', (req, res) => {
    return res.send("Nothing")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})