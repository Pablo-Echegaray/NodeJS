const express = require('express');
const http = require('http');
const app = express();

app.get('/hola', (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('<h1>Hola Mundo!</h1>'); 
});

app.listen(3000, (err) => {
    console.log(err);
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});
