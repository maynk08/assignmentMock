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
    //console.log(data)
    const{field,State,Country} = data

    if(!isValidBody(data)){
        return res.statu(400).send({status:false,msg:"Input data"})
    }

    if(!isValid(field)){
        return res.status(400).send({status:false,msg:"Enter field details"})
    }

    if(!isValidObjectId(field)){
        return res.status(400).send({status:false,msg:"Enter valid object id"})
    }

    if(!isValid(State)){
        return res.status(400).send({status:false,msg:"Enter state name"})
    }

    if(!isValid(Country)){
        return res.status(400).send({status:false,msg:"Enter country name"})
    }

    const createReg = await regionModel.create(data)
    //console.log(createReg)
    return res.status(201).send({status:true,data:createReg})
}

catch(err){
    return res.status(500).send({status:false,msg:err})
}
}



module.exports = {createRegion}