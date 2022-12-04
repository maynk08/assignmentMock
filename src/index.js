const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const route = require('../src/routes/route')
const passport = require('passport')
const passportSetUp = require("../src/Middleware/Authenticate")
const cookieSession = require("cookie-session")
const credentials = require("../src/config/config")
const app = express()



app.use(bodyParser.json())

app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[credentials.credentials.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())

//app.use(passportSetUp.authCheck())

mongoose.connect("mongodb+srv://Keshav-cyber:7LizqrsG6tL39fuT@cluster0.ohm0bak.mongodb.net/newDBAgr?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});