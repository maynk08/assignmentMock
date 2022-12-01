const express = require('express')
const router = express.Router()
const fieldController = require("../controllers/fieldController")
const regionController = require("../controllers/regionController")


router.post('/createField',fieldController.createfield)
router.post('/createRegion',regionController.createRegion)


module.exports = router