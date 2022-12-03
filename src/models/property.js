const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId


const property = new mongoose.Schema({

    Region:
    {
        region:{
           city:String,
           state:String,
           Country:{
            type:String,
            default:"India"
           }
        },

        field:{
           dimensions: String,
           arable:{
            type:Boolean,
            default:true
           },

           latitude:{
            type:String,
            default:"65 N"
           },

           longitude:{
            type:String,
            default:"68 E"
           }
        }
        
    },

    worth:{
      type:String,
      required: true
    },

    Crop:{
        type:Array,
        required:true
    },

    CropCycle:{
        type:String,
        enum:["Rabi","Kharif","Zaid"]
    },
    
    regionId:{
        type:ObjectId,
        ref:"Region"
    }

})

module.exports = mongoose.model("Property",property)