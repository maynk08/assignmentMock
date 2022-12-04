const property = require("../models/property")
const mongoose = require("mongoose")

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

const createProp = async(req,res) => {
    try{

        const data = req.body
        const {region,worth} = data

        if(!isValidBody(data)){
            return res.status(400).send({status:false,msg:"All fields are mandatory"})
        }


        if(!isValid(region)){
            return res.status(400).send({status:false,msg:"Enter region"})
        }

        if(!isValid(worth)){
            return res.status(400).send({status:false,msg:"Enter worth of property"})
        }

        if(!isValidObjectId(region)){
            return res.status(400).send({status:false,msg:"Enter valid object id for region"})
        }


        const createData = await property.create(data)
        return res.status(201).send({status:true,msg:createData})

    }
    catch(err){
        console.log(err)
        return res.status(500).send({status:false,msg:err})
    }
}


/*============================================================================================================================================================*/


const getProp = async(req,res) => {
    try{
        const data = await property.find()

        if(data.length==0){
            return res.status(404).send({msg:"No data found !"})
        }
        
        return res.status(200).send({status:true,data:data})
    }
    catch(err){
        return res.status(500).send({status:false,msg:err})
    }


}

module.exports = {createProp,getProp}