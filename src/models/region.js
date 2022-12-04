const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const region = new mongoose.Schema({

    location:{
        Country:String,
        division:String,
        city: String,
        State:String,
        field:{
            type:ObjectId,
            ref:"Field"
        }
    },

    climate:{
       type:String,
       enum:["Moderate","Extreme"]
    }
})

module.exports = mongoose.model("Region",region)