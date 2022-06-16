// es mi archivo app.js con un proyecto de express
const express = require('express');
const app = express();
const path = require('path');

// se agrega en la clase 15 cuando incorporamos los html de login y register
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

// ruta de archivos estáticos
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

// y tengo el envío a la ruta raíz (/) del archivo html que estamos enviando/usando, en este caso home.html
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

// aqui viene el método listen que apunta al servidor 3000
// clase 10 a 14 estaba así
//     app.listen(3000, () =>
//     console.log('servidor corriendo en el puerto 3000')
// );
// a partir de clase 15 lo cambia de esta manera:
app.listen(3000, ()=>{
    console.log(`Server running at http://${HOST}:${PORT}/`);
});

// tambien tengo una referencia a error 404 para página no encontrada.
app.get('/404', (req, res) => {
    res.send("Error página no encontrada");
});