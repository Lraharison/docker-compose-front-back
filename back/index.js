var express = require('express')
var app = express()
app.get('/', function (req, res) {
    res.json({
        username: 'raharisonl'
    })
})

//Launch listening server on port 8081
app.listen(8081, function () {
    console.log('app listening on port 8081!')
})