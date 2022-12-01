const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId


const property = new mongoose.Schema({
    land:{
        type:String,
        required:true
    },

    worth:{
      type:Stirng,
      required: true
    },

    region:{
        type: ObjectId,
        ref: "Region"
    }
})

module.exports = mongoose.model("Property",property)