const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const field = new mongoose.Schema({

    dimensions: {
        type:String,
        required:true
    },

  
    arable:{
      type: Boolean,
      default:true
    },

    soil_type: {
      type:String,
      default: "Alluvial soil"
    },

    crops:{
      type:ObjectId,
      ref:"Crops"
    }

})


module.exports = mongoose.model("Field",field)