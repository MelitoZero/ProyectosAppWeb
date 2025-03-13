const express = require('express');
const app = express();
const { globalErrorHandler, AppError } = require('./utils/appError');
const userRoutes = require('./routes/userRoutes');
const morgan = require('morgan');
require('dotenv').config({path: './config.env'});

//Middleware para analizar datos en formato JSON en el cuerpo de la solicitud
app.use(express.json());
//Configurar el middleware de morgan para el registro de solicitudes
app.use(morgan('combined'));
//Middleware para exponer mis rutas y puedan ser accedidas
app.use('/api/users', userRoutes);
app.all('*', (req, res, next)=>{
    const error = new AppError(`No se ha podido acceder a ${req.originalUrl} en el servidor.`, 404);
    next(error);
});
//Middleware para el manejo de errores
app.use(globalErrorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log('El servidor esta corriendo en el puerto 3000');
})