const property = require("../models/property")


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
        const {land,worth,region} = data

        if(!isValidBody(data)){
            return res.status(400).send({status:false,msg:"All fields are mandatory"})
        }

        if(!isValid(land)){
            return res.status(400).send({status:false,msg:"Land must be present"})
        }

        if(!isValid(worth)){
            return res.status(400).send({status:false,msg:"Enter worth of property"})
        }

        if(!isValid(region)){
            return res.status(400).send({status:false,msg:"Enter region"})
        }

        if(!isValidObjectId(region)){
            return res.status(400).send({status:false,msg:"Enter valid object id for region"})
        }


        const createData = await property.create(data)
        return res.status(400).send({status:false,msg:createData})

    }
    catch(err){
        return res.status(400).send({status:false,msg:err})
    }
}