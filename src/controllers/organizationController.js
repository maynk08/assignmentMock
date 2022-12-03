const organization = require("../models/organization")

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



const createOrg = async(req,res) => {

    try
    {
    let data = req.body

    if(!isValidBody(data)){
        return res.status(400).send({status:false,msg:"Enter data"})
    }
   // let {name,property,founder,City} = data

   // if(!isValid(name)){
   //     return res.status(400).send({status:false,msg:"Enter name"})
   // }

    // if(!isValid(property)){
    //     return res.status(400).send({status:false,msg:"Enter property"})
    // }

    // if(!isValidObjectId(property)){
    //     return res.status(400).send({status:false,msg:"Enter valid object id for property"})
    // }


    // if(!isValid(founder)){
    //     return res.status(400).send({staus:false,msg:"Enter founder name"})
    // }



    // if(!isValid(City)){
    //     return res.status(400).send({status:false,msg:"Enter city name"})
    // }

    const createOrg = await organization.create(data)
    console.log(createOrg)
    return res.status(201).send({status:true,data:createOrg})
    }


    catch (error) {
       return res.status(500).send({ status: false, message: error.message });
    }
}

/*============================================================================================================================================================*/


const getOrg = async(req,res) => {
    try{

        const getData = await organization.find().populate("property").populate("regionId")
        return res.status(200).send({status:false,msg:getData})
    }

    catch (error) {
        return res.status(500).send({ status: false, message: error.message });
     }


}

module.exports = {createOrg,getOrg}