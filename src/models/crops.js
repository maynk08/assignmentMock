const mongoose = require('mongoose')

const crops = new mongoose.Schema({

    grown:{
        type:String,
        required:true
    },

    crop_cycle:{
        type:String,
        enum:['Rabi','Kharif','Zaid']
    },


})

module.exports = mongoose.model('Crops',crops)