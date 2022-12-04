const mongoose = require("mongoose")


const user = new mongoose.Schema({
    username:String,
    google_id : String
})

module.exports = mongoose.model("User",user)