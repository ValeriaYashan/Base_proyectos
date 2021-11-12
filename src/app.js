// ************ Require's ************
const express = require('express');

const path = require('path');

// ************ express() - ************
const app = express();

// ************ Middlewares - ************
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));


// ************ Template Engine -  ************
app.set('view engine', 'ejs');
app.set('views', './src/views'); // Seteo de la ubicación de la carpeta "views"


// ************ Route System require and use() ************
const mainRouter = require('./routes/main');

app.use('/', mainRouter);
app.use('/login',mainRouter);
app.use('/register',mainRouter);


/*ARREGLAR PARA QUE SEA EL ENTRY POINT*/
/*app.listen(process.env.PORT || 3000, function() {
    console.log(`Servidor corriendo en puerto 3000`);
});*/


// ************ exports app - ************
module.exports = app;