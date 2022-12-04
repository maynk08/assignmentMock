const cropModel = require("../models/crops")

const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
};



const createCrops = async(req,res) => {
    try{

        let data = req.body;
        const{grown,crop_cycle} = data

        if(!isValid(grown)){
            return res.status(400).send({status:false,msg:"Enter grown crops !"})
        }

        if(!isValid(crop_cycle)){
            return res.status(400).send({status:false,msg:"Enter crop cycle"})
        }

        await cropModel.create(data)
        return res.status(201).send({status:true,data:data})
    }
    catch(err){
      return res.status(500).send({status:false,msg:err})
    }
}

/*============================================================================================================================================================*/

const getCrops = async(req,res) => {
    try{

        let data = await cropsModel.find()
        if(data.length==0){
            return res.status(404).send({msg:"No data found !"})
        }
        return res.status(200).send({status:true,data:data})
    }
    catch(err){
        return res.status(500).send({status:false,msg:err})
    }
}

module.exports= {createCrops,getCrops}