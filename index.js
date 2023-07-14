const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res) => {
    return res.send('Hello World! asdasda s')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})