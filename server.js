const express = require('express');
const app = express()
const path = require('path')
const port = process.env.PORT || 4000
app.use('/', express.static('dist'))
app.get('/', (res, req, next) => {
    res.sendFile('index.html');
})

app.listen(port, () => console.log('runnning', port))