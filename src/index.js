const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const route = require('../src/routes/route')

const app = express()
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://Keshav-cyber:7LizqrsG6tL39fuT@cluster0.ohm0bak.mongodb.net/newDBAgr?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});