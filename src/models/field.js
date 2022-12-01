const mongoose = require('mongoose')

const field = new mongoose.Schema({

    dimensions: {
        type:String,
        required:true
    },
 
    arable:{
      type: Boolean,
      default:true
    }

})


module.exports = mongoose.model("Field",field)