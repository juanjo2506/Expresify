
// Rutas para el Dashboard del app

const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController');


router.get('/dashboard', appController.dashboard);


module.exports = router;