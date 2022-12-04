const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const organization = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    
   property:[{
    type:ObjectId,
    ref:"Property"
   }],

    Owner:{
        type:String,
        required:true
    }

  
})

module.exports = mongoose.model("Organization",organization)