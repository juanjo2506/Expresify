const path = require('path');
const express = require('express');
const app = express();
const override = require('method-override');
const bodyParser = require('body-parser');

// Configuración de la vista y ubicación de las carpetas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para manejar datos de formularios
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de archivos estáticos

const uploadsImages = path.resolve(__dirname, '..uploads');
app.use(express.static(uploadsImages));


const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

// ENRUTADORES
const mainRouter = require('./routes/index.routes.js');
const homeProfile = require('./routes/UserRoutes.js');
const userProducts = require('./routes/userProductRouter.js');
const DashAppRoute = require('./routes/DashAppRouter.js');

// RUTAS
app.use('/', mainRouter);
app.use('/user', homeProfile);
app.use('/user', userProducts);

app.use('/:UserName/', DashAppRoute);



// Array global para almacenar temporalmente los productos
global.products = [];



// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor inicializado en el puerto 3000');
});
