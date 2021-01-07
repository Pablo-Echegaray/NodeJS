const express = require('express');
const http = require('http');
const MongoInterface = require('./lib/MongoInterface');

const app = express();

app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));
//body parser
app.use(express.json());

app.get('/usuario/:id', (request, response) => {
    console.log(`ID: ${request.params.id}`);
    MongoInterface.query('Prueba', 'fakes', {id:request.params.id},(err, resultado)=>{
       response.setHeader('Content-Type', 'application/json');

       if(err){
           response.status(500).end(JSON.stringify({Error: 'Ha ocurrido un error interno'}));
           return;
       }

       if(resultado.lenght < 1){
           response.status(404).end(JSON.stringify(resultado));
           return;
       }

       response.status(200).end(JSON.stringify(resultado));
    
   });
});

app.get('/usuario', (request, response)=>{
   let query = {};

   //Parametrizacion de la consulta
   if(request.query['firstName']) query.firstName = request.query['firstName'];
   if(request.query['lastName']) query.lastName = request.query['lastName'];
   if(request.query['city']) query.city = request.query['city'];
   if(request.query['streetName']) query.streetName = request.query['streetName'];
   if(request.query['country']) query.country = request.query['country'];
   if(request.query['accountName']) query.accountName = request.query['accountName'];
   if(request.query['account']) query.account = request.query['account'];
   if(request.query['amount']) query.amount = request.query['amount'];

   MongoInterface.query('Prueba', 'fakes', query, (err, resultado)=>{
       response.setHeader('Content-Type', 'application/json');

       if(err){
           //Error inesperado, error de servidor
           response.status(500).end(JSON.stringify({Error: 'Ha ocurrido un error'}));
           return;
       }

       if(resultado.lenght < 1){
        response.status(404).end(JSON.stringify(resultado));
        return;
    }

    response.status(200).end(JSON.stringify(resultado));
   })

});

app.post('/usuario', (request, response) => {
    console.log(request.body);
    MongoInterface.insert('tgi5', 'amigos', request.body, (err)=>{

        response.setHeader('Content-Type', 'application/json');

       if(err){
           response.status(500).end(JSON.stringify({Error: 'Ha ocurrido un error interno'}));
           return;
       }

       response.status(201).end(JSON.stringify({ resultado: 'Usuario insertado'}));
    });   
});    


//--------------------------------------

/* app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));
//body parser
app.use(express.json());

app.get('/usuario/:id', (request, response) => {
    console.log(`ID: ${request.params.id}`);
    MongoInterface.query('Prueba', 'fakes', {id:request.params.id},(err, resultado)=>{
       response.setHeader(200, {
        'Content-Type' : 'application/json'
    })
    .end(resultado);
   });
});

app.get('/usuario', (request, response)=>{
   /*  let obj = resultados;
    response.writeHead(200, {
        'Content-Type': 'aplication/json'
    })
    .end(JSON.stryngify(obj));
    //modulosql.desconectar(); */
/* });

app.post('/usuario', (request, response) => {
    console.log(request.body);
    MongoInterface.insert('tgi5', 'amigos', request.body, (err)=>{
        if(err){
            response.writeHead(500, {
                'Content-Type': 'application/json'
            })
            .end(JSON.stringify({resultado: 'error insercion'}));
            return;
        }
    response.writeHead(200, {
        'Content-Type': 'aplication/json'
    })
    .end(JSON.stringify({resultado: 'usuario insertado'}))
    })
});  */