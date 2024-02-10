const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const multer = require('multer');
const profileController = require('../controllers/UserController.js');
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
        //aqui hay que aclarar bien tanto en el ejs que corresponda como aqui en el multer, donde van a ir las imagenes que se suban
		cb(null, './public/img/avatars');
	},
	filename: (req, file, cb) => {
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
	}
})
const uploadFile = multer({ storage });

const validations = [
	body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
	body('email').notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('countrySelect').notEmpty().withMessage('Tienes que elegir un país'),
	body('accountType').notEmpty().withMessage('¿Qué tipo de cuenta requieres?'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
	body('confirmPassword').notEmpty().withMessage('Tienes que confirmar la contraseña'),
]




router.get('/profile', profileController.homeProfile);

router.get('/register', profileController.register);
router.post('/register', validations, profileController.proccesRegister);

router.get('/login', profileController.login);



module.exports = router;