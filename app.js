// es mi archivo app.js con un proyecto de express
const express = require('express');
const app = express();
const path = require('path');

// ruta de archivos estáticos
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

// aqui viene el método listen que apunta al servidor 3000
app.listen(3000, () =>
    console.log('servidor corriendo en el puerto 3000')
);

// y tengo el envío a la ruta raíz (/) del archivo html que estamos enviando/usando, en este caso home.html
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

// tambien tengo una referencia a error 404 para página no encontrada.
app.get('/404', (req, res) => {
    res.send("Error página no encontrada");
});