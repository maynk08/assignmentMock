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

    const {dimensions,arable,soil_type,crops} = data

    if(!isValid(dimensions)){
        return res.status(400).send({status:false,msg:"Enter dimension of field"})
    }

    if(!isValid(crops)){
        return res.status(400).send({staus:false,msg:"Enter crops"})
    }

   const creatingField = await field.create(data)
   return res.status(200).send({status:true,msg:creatingField})
}
catch(err){
    return res.status(400).send({status:false,msg:err})
}
}

/*============================================================================================================================================================*/

const getFields = async(req,res) => {

    try{
        const data = await field.find()

        if(data.length==0){
            return res.status(404).send({msg:"No data found !"})
        }
        return res.status(200).send({status:true,data:data})
    }
    catch(err){
        return res.status(500).send({status:false,msg:err})
    }

}


module.exports = {createfield,getFields}
