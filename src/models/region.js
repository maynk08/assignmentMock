const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const region = new mongoose.Schema({

    field: {
        type:ObjectId,
        required:true,
        ref:"Field"
    },

    State:{
        type:String,
        required:true
    },

    Country:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Region",region)