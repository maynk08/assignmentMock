const express = require('express')
const router = express.Router()
const fieldController = require("../controllers/fieldController")
const regionController = require("../controllers/regionController")
const propController = require("../controllers/propertyController")
const orgController = require("../controllers/organizationController")
const passport = require('passport')
require('../Passport/passport')

router.post('/createField',fieldController.createfield)
router.post('/createRegion',regionController.createRegion)
router.post('/createOrg',orgController.createOrg)
router.get('/getOrg',orgController.getOrg)
router.post('/createProp',propController.createProp)
router.get('/getProp',propController.getProp)

router.get('/', 
  passport.authenticate('google', { failureRedirect: '/createField' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/createField');
  });
  
module.exports = router