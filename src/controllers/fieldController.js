const field = require("../models/field")

const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
};


/*============================================================================================================================================================*/

const createfield = async(req,res) => {

    try{
    const data = req.body

    const {dimensions} = data

    if(!isValid(dimensions)){
        return res.status(400).send({status:false,msg:"Enter dimension of field"})
    }


   const creatingField = await field.create(data)
   return res.status(400).send({status:false,msg:creatingField})
}
catch(err){
    return res.status(400).send({status:false,msg:err})
}
}

module.exports = {createfield}