const regionModel = require("../models/region")
const mongoose = require('mongoose')

const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
};

const isValidBody = function (body) {
    return Object.keys(body).length > 0;
};

const isValidObjectId = function (ObjectId) {
    return mongoose.Types.ObjectId.isValid(ObjectId);
};



/*============================================================================================================================================================*/

const createRegion = async(req,res) => {

    try{
   
        const data = req.body

        if(!isValidBody(data)){
            return res.status(400).send({status:false,msg:"Enter data !"})
        }

        const {location,climate} = data
        const {field} = location

        if(!isValid(location)){
            return res.status(400).send({status:false,msg:"Enter location"})
        }

        if(!isValid(field)){
            return res.status(400).send({status:false,msg:"Enter field"})
        }

        if(!isValid(climate)){
            return res.status(400).send({status:false,msg:"Enter climate"})
        }

        if(["Moderate","Extreme"].indexOf(climate)==-1){
            return res.status(400).send({status:false,msg:"Value can be either Moderate or Extreme "})
        }
     

    const createReg = await regionModel.create(data)
    //console.log(createReg)
    return res.status(201).send({status:true,data:createReg})
}

catch(err){
    return res.status(500).send({status:false,msg:err})
}
}



/*============================================================================================================================================================*/


const getRegion = async(req,res) => {
    try{

        let data = await regionModel.find()
        if(data.length==0){
            return res.status(404).send({msg:"No data found !"})
        }
        return res.status(200).send({status:true,data:data})
    }
    catch(err){
        return res.status(500).send({status:false,msg:err})
    }
}


module.exports = {createRegion,getRegion}