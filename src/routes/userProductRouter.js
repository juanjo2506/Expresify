const express = require('express');
const router = express.Router();
const userProductController = require('../controllers/UserController');

router.get('/profile', userProductController.getProducts);
router.post('/add-product', userProductController.addProduct);
router.get('/edit-product/:id', userProductController.editProductPage);
router.put('/edit-product/:id', userProductController.editProduct);
router.delete('/delete-product/:id', userProductController.deleteProduct);

module.exports = router;