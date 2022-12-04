const organization = require("../models/organization")
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


const createOrg = async(req,res) => {

    try
    {
    let data = req.body

    if(!isValidBody(data)){
        return res.status(400).send({status:false,msg:"Enter data"})
    }
   let {name,property,Owner} = data

   if(!isValid(name)){
       return res.status(400).send({status:false,msg:"Enter name"})
   }

    if(!isValid(property)){
        return res.status(400).send({status:false,msg:"Enter property"})
    }

    property.map((id)=>{
        if(!isValidObjectId(id)){
            return res.stauts(400).send({status:true,msg:"Check property ids"})
        }
    }
    )


    if(!isValid(Owner)){
        return res.status(400).send({staus:false,msg:"Enter founder name"})
    }


    const createOrg = await organization.create(data)
   // console.log(createOrg)
    return res.status(201).send({status:true,data:createOrg})
    }


    catch (error) {
       return res.status(500).send({ status: false, message: error.message });
    }
}

/*============================================================================================================================================================*/

const getOrg = async(req,res) => {
    try{

        const getData = await organization.find().populate({
            path:"property",
            select:{__v:0,_id:0},
            populate:{
                path:"region",
                select:{__v:0,_id:0},
                populate:{
                    path:"location",
                    populate:{
                        path:"field",
                        model:"Field",
                        select:{__v:0,_id:0}
                    }
                }
            }
        }).select({__v:0,_id:0})

        if(getData.length==0){
            return res.status(404).send({status:false,msg:"No data found!"})
        }

        return res.status(200).send({status:true,msg:getData})
    }

    catch (error) {
        return res.status(500).send({ status: false, message: error.message });
     }


}

module.exports = {createOrg,getOrg}