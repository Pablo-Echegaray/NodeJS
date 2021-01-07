const fs = require('fs');
const mongoInterface = require('./lib/MongoInterface');
const _ = require('underscore');

//Subida a MongoDB

/* function leerCarpetaPromise(){
    return new Promise((resolve, reject)=>{
        let carpetaFakes = '/Users/Operador/Desktop/archivosFake';
        fs.readdir(carpetaFakes, (err, files) =>{
          if(err){
              reject(err);
              return;
          }
          resolve(files);
        });
    });
}

function leerArchivoPromise(archivo){
    return new Promise((resolve, reject)=>{
        let todoElPath = ['/Users/Operador/Desktop/archivosFake/', archivo].join('');
        fs.readFile(todoElPath, 'utf-8', function(err, obj){
          if (err) {
            reject(err);
            return;
          }
          resolve(obj);
        });    
    });
};

function insertarMongoPromise(obj){
    return new Promise((resolve, reject)=>{
        mongoInterface.insert('Prueba','fakes',JSON.parse(obj),(err, resultado) => {
            if(err){
              reject(err);
              return;
           }
           resolve('Insertado');
        });
    });
};

(async function(){
    let archivos = await leerCarpetaPromise();
    for(let unArchivo of archivos){
        console.log(unArchivo);
        let contenido = await leerArchivoPromise(unArchivo);
        console.log(contenido);
        let resultado = await insertarMongoPromise(contenido);
        console.log(resultado);
    }


    // console.log(archivos);
   // let archivo = await //leerArchivoPromise(archivos[0]);
    //console.log(archivo);
   // let resultado = await insertarMongoPromise(archivo);
}()); */

//====================================
//MISMO CODIGO PERO CON TRY Y CATCH
//===============================

function leerCarpetaPromise(){
    return new Promise((resolve, reject)=>{
        let carpetaFakes = '/Users/Operador/Desktop/archivosFake';
        fs.readdir(carpetaFakes, (err, files) =>{
          if(err){
              reject(err);
              return;
          }
          resolve(files);
        });
    });
}

function leerArchivoPromise(archivo){
    return new Promise((resolve, reject)=>{
        let todoElPath = ['/Users/Operador/Desktop/archivosFake/', archivo].join('');
        fs.readFile(todoElPath, 'utf-8', function(err, obj){
          if (err) {
            reject(err);
            return;
          }
          resolve(obj);
        });    
    });
};

function insertarMongoPromise(obj){
    return new Promise((resolve, reject)=>{
        let jsonParseado = null;
        try{
            jsonParseado = JSON.parse(obj);
        }
        catch(err){
           rejected('NO PUDE PARSEAR EL JSON');
        }
        mongoInterface.insert('Prueba','fakes',jsonParseado,(err, resultado) => {
            if(err){
              reject(err);
              return;
           }
           resolve('Insertado');
        });
    });
};

(async function(){
    let archivos = await leerCarpetaPromise();
    for(let unArchivo of archivos){
        console.log(unArchivo);
        try{
            let contenido = await leerArchivoPromise(unArchivo);
            console.log(contenido);
            let resultado = await insertarMongoPromise(contenido);
            console.log(resultado);
        }
        catch(err){
            console.log(err);
            //Aca se podria hacer un await que moviese los archivos de error a una carpeta especifica.
        }   
    }
    console.log('FIN DEL PROCESO');
}());    

//PARA PODER APRECIAR EL MANEJO DE TRY Y PRINCIPALMENTE EL CATCH TENEMOS QUE MODIFICAR ALGUNO DE LOS ARCHIVOS JSON PARA QUE SU SYNTAXIS SEA INCORRECTA Y NOS TIRE UN ERROR. Ya que el error corresponderia al parseado del JSON.