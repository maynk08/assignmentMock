const express = require('express')
const router = express.Router()
const fieldController = require("../controllers/fieldController")
const regionController = require("../controllers/regionController")
const propController = require("../controllers/propertyController")
const orgController = require("../controllers/organizationController")
const cropController = require("../controllers/cropController")
const passport = require('passport')
const auth = require("../Middleware/Authenticate")

/*============================================================================================================================================================*/

//login-set-up

router.get('/login',
  passport.authenticate('google', { scope: ['profile'] }));
  
router.get('/auth/google/callback', 
  passport.authenticate('google'), (req,res)=>{
   // console.log(req,res)
    res.redirect("/getOrg")
  }
  )

/*============================================================================================================================================================*/
 
//routes for creation
router.post('/createOrg',auth.authCheck,orgController.createOrg)
router.post('/createProp',auth.authCheck,propController.createProp)
router.post("/createCrop",auth.authCheck,cropController.createCrops)
router.post('/createField',auth.authCheck,fieldController.createfield)
router.post('/createRegion',auth.authCheck,regionController.createRegion)



//routes for getting data
router.get('/getOrg',auth.authCheck, orgController.getOrg)
router.get('/getProp',auth.authCheck,propController.getProp)
router.get('/getRegion',auth.authCheck,regionController.getRegion)
router.get('/getField',auth.authCheck,fieldController.getFields)
router.get('/getCrops',auth.authCheck,cropController.getCrops)






module.exports = router