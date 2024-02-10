const express = require('express');
const router = express.Router();

const mainController = require('../controllers/index.controller.js');


router.get('/', mainController.home);





module.exports = router;