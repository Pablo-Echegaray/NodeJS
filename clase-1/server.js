//Creando un servidor http en node. El modulo http ya viene integrado, por lo cual no es necesario instalar ninguna libreria.
//Clientes servers: curl - postman
//llamar a curl: \curl\curl.exe localhost:8080
/* const http = require('http');

const server = http.createServer((request, response)=>{
    response.writeHead(200);
    response.end('<h1>Hola a Todxs</h1>');
});
server.listen(8080); */

//glitch.com>new proyect>hello-express : genera una aplicacion de ejemplo con el framework express. Modificamos el server.js y le damos a show para levantarlo y poder visualizarlo.

//>>Creando un servidor http con express<<
const express = require('express');
const http = require('http');
const app = express();

app.get('/hola', (request, response)=>{
    response.writeHead(200, {
        'Content-Type' : 'text/html'
    });
    response.end('<h1>Hola Mundo!</h1>');
});

app.listen(3000, ()=>{
    console.log('Aplicacion ejemplo, escuchando el puerto 3000')
});

//curl -v localhost:3000/hola

//SERVER SIDE RENDERING: hace 10 años masomenos que no se renderiza del lado del servidor. Hoy en dia las empresas mas que trabajar el front-end y el back-end en distintas areas, directamente lo trabajan en empresas diferentes. El CLIENT SIDE RENDERING es lo que hace la empresa que hace la interfaz web y el SERVER SIDE es una API REST o una API SOAP para que el cliente pueda consumir los datos, y no utilice esos datos para renderizar.

//>>>MUSTACHE<<< : Nos va a ayudar de ambos lados, del server side y del client side.

/* const Mustache = require('mustache');

const alumnos = [
    'Pablo',
    'Sofia',
    'Vladi'
];

const htmlTmpl = '{{#alumnos}}<h1>Nombre: {{.}}</h1>{{/alumnos}}';

const resultado = Mustache.render(htmlTmpl, {alumnos : alumnos});

console.log(resultado); */

//>>>IMPORTANDO UN MODULO<<<
/* const objVariasFn = require('./index');
objVariasFn.saludar();//hola Vladi
objVariasFn.persona('Pablo');//x = 'Pablo'
objVariasFn.saludar();//hola Pablo */

