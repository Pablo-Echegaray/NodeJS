const fs = require('fs');
const mongoInterface = require('./lib/MongoInterface');
const forEachAsync = require('./lib/forEachAsync');
const _ = require('underscore');

//Subida a MongoDB

let carpetaFakes = '/Users/Operador/Desktop/archivosFake';
fs.readdir(carpetaFakes, (err, files) => {
  forEachAsync(
    files,
    (unFile, next, abort) => {
      console.log(unFile);
      let todoElPath = ['/Users/Operador/Desktop/archivosFake/', unFile].join('');
      fs.readFile(todoElPath, 'utf-8', function(err, obj){
        if (err) {
          console.log(err);
          abort();
          return;
        }
        mongoInterface.insert('Prueba','fakes',JSON.parse(obj),(err2, resultado) => {
            console.log(err2);
            console.log(resultado);
            console.log(obj);
            setTimeout(next, 2000);
          }
        );
      });
    },
    () => {
      console.log('trabajo terminado');
    }
  );
});

//01:18:00
// -----------------------------------------------------------
//_defer y la importancia de liberar la pila ----------------------------------------------------------

/* let carpetaFakes = "/Users/Operador/Desktop/archivosFake";
fs.readdir(carpetaFakes, (err, files) => {
  forEachAsync(
    files,
    (unFile, next, abort) => {
      console.log(unFile);
      _.defer(next); //sin next, solo itera una vez y trae un solo archivo.
    },
    () => {
      console.log("trabajo terminado");
    }
  );
}); */
//Es una cola eterna de metodos que se van encolando y encadenando. El _.defer es bueno utilizarlo para que tire el next una vez que haya terminado de realizar todos los procesos ya que es una suerte de setTimeout o evento asincronico.

//Sin el ._defer, el "next" utilizaria la misma pila que el resto de procesos, y como a ciencia cierta uno no puede saber exactamente que hara internamente el "next", lo mas conveniente es vaciar la pila y encolar al "next"(con el _.defer) para que este se ejecute una vez la pila este vacia. Para no ponerse a analizar que hace el next, con el defer dejo que se vacie la pila por si el next hace otras cosas. Al no ser todo asyncronico, una buena practica es vaciar el callstack antes de que se ejecute, en este caso el next, para evitar que se trabe el thread y trauga complicaiones.

//--------------------------------------------
//MONGO DB:
//Base de datos no-relacional/no-transaccional
//Bases de datos - colecciones []
//Si bien no hay relacion entre los datos y hacepta cualquiera de ellos, no deberiamos alejarnos mucho del modelo relacional a la hora de pensar y diseñar un sistema de almacenamiento.
//Surge, entre otras cosas, por la necesidad del almacenamiento de grandes volumenes de informacion (big-data). El crecimiento de las redes sociales fue un importante detonante de esto.
//En un aspecto "filosofico" de que almacenar, tratamos de sensar todo lo que podemos para luego ver si se nos ocurre algun informe. Tomar la mayor  cantidad de datos posibles de la mayor cantidad de fuentes diversas que nos permitan un amplio abanico de toma de decisiones futuras.
