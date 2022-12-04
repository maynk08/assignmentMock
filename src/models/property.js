const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId


const property = new mongoose.Schema({

    region:{
        type: ObjectId,
        ref: "Region"
    },

    worth:{
      type:String,
      required: true
    }

})

module.exports = mongoose.model("Property",property)