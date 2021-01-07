const generadorObjetosFalsos = require("./feca");
const fs = require("fs");
const _ = require("underscore");
/* const { generarUnObjetoFalso } = require("./feca"); */

/*
const objGen = generarObjetosFalsos(5000);
const strObjGen = JSON.stringify(objGen);

let nombreArchivo = `/var/tmp/usuarios/${objGen.id}.json`;
fs.writeFile(nombreArchivo, strObjGen, 'UTF-8', (err) => {
    console.log(err);
});
//El fs.writeFile es un procedimiento asincrono que abrira un thread y grabara un archivo, luego llamara al callback. Este procedimiento lo estara haciendo por cada vez que sea llamado, por lo cual hay que tener cuidado de no usarlo en dentro de un ciclo ya que podria abir varios thread y hacer peligrar la memoria y hacer caer todo el sistema. Dado que escribir datos es un procedimiento asincrono, para poder generar 1000 datos e ir escribiendolos de uno por vez, es necesario diseñar un modo de poder hacerlo ya que no podriamos hacerlo con un simple for.
*/

/*
const arrUsu = generarObjetosFalsos(5);

(function wrapper() {
    let idx = 0;
    (function innerFn() {
        if (idx < 5) {
            console.log(arrUsu[idx]);
            idx++;
            _.delay(innerFn, 5000);        
        }
    })();
})();
//_.delay() : es un metodo de la libreria underscore que emula un setTimeOut().
*/
//================================================================================================
//CODIGO DE GENERADOR DE OBJ FALSOS Y ESCRITURA DE LOS MISMOS EN ARCHIVO JSON
//Patron observer (asincrono)
/* generadorObjetosFalsos
  .setCantidad(2)
  .setEvtObjetoFalsoGenerado(function (objFalso) {
    console.log(objFalso);
    let nombreArchivo = `/Users/Operador/Desktop/usuarios/${objFalso.id}.json`;
    let strObj = JSON.stringify(objFalso);
    fs.writeFile(nombreArchivo, strObj, "UTF-8", (err) => {
      if (err) {
        console.log(err);
        generadorObjetosFalsos.abortar();
        return;
      }
      generadorObjetosFalsos.continuar();
    });
  })
  .setEvtOnRecorridaFinalizada(function () {
    console.log("Me voy a comer");
  })
  .arrancar(); */
//Patron observer (asincrono) - para poder utilizarlo debemos haber retornado el this en cada metodo del objeto.
// Si bien .setEvtObjetoFalsoGenerado() es sincronico, dentro de el fs.writeFile es asincrono. La ventaja es que el patron de diseño utilizado (observer[dote.notation]), y el hecho de setear el evento con un callback, nos prepara el codigo de tal forma que si hubiese otro proceso asincrono, como por ejemplo la generacion de datos falsos de manera asincronica, no habria problema en que se lleve a cabo dado que el codigo esta preparado para procesar tareas asincronicas y no haria falta retocar el codigo en si.
//========================================================================================================

//CLASE 3 EJEMPLO SIMPLE DE OBSERVABLE. EJEMPLOS CON CLASS Y UTILIZACION, NUEVAMENTE, DE DOTE NOTATION.

/* class Observado {
  constructor() {
    this.dato = null;
  }
  setearDato(dato) {
    this.dato = dato;
    return this;
  }
  getDato(cb) {
    cb(this.dato);
    return this;
  }
}

let observado = new Observado();
let dato = observado
       .setearDato("Hello World")
       .getDato(z => {console.log(z)})
       .getDato(z => {console.log(z)})
       .getDato(z => {console.log(z)});
 */

 //---------------------------------
//En este caso vamos a generar un callback universal para no tener que setear uno cada vez que llamamos a getDato.
 class Observado {
  constructor() {
    this.dato = null;
    this.evt ={
      fnOnGetDato: ()=>{}
    }
  }
  setCallBackOnGetDato(fn){
    this.evt.fnOnGetDato = fn;
  }
  setearDato(dato) {
    this.dato = dato;
    return this;
  }
  getDato() {
    setTimeout(()=>{
      this.evt.fnOnGetDato(this.dato);
    }, 2000);
    return this;
  }
}

let observado = new Observado();
let dato = observado
       .setearDato("Hello World")
       .getDato()
       .getDato()
       .getDato()
       .setCallBackOnGetDato((z)=>{console.log(z)});
//En la programacion orientada a objetos es importante que no se vea todo el camino interno de cada procedimiento. Por eso seteamos setCallBackOnGetDato      