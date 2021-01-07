const GeneradorObjetosFalsos = require("./lib/GeneradorObjetosFalsos");
const fs = require("fs");

const ObjetoFalso = require("./lib/ObjetoFalso");

//la dote notation me pemite evitar la variable "generadorObjFalsos" y directamente poner "new GeneradorObjetosFalsos(10)".
const generadorObjFalsos = new GeneradorObjetosFalsos(5)
  .setEvtObjetoFalsoGenerado((numero, objFake, next, abortar) => {
    console.log(`numero de fake: ${numero}`);
    console.log(objFake);
    let path = `/Users/Operador/Desktop/archivosFake/${objFake.id}.json`;
    fs.writeFile(path, JSON.stringify(objFake), "utf-8", (err) => {
      if (err) {
        return abortar();
      }
      next();
    });
  })
  .setEvtOnRecorridaFinalizada(() => {})
  .arrancar();
//el problema de la dote notation es que no genera el "generadorObjFalsos" sino hasta que termine de ejecutar la linea 13 de codigo, por lo que "generadorObjFalsos.continuar()" no podria ejecutarse ya que "generadorObjFalsos" no existe.
//Dado que en el _.defer() del modulo GeneradorObjetosFalsos le pasamos como parametro la funcion continuar y abortar, podemos utilizar aqui tanto "next" como "abortar" para que de ese modo, ya que son asincronas, si podamos manejar la continuidad y la no continuidad de la generacion de objetos.
//if (numero === 5) { return abortar(); //el return siempre debe estar si omitimos el else, esto es para que no ejecute mas lineas de codigo.}
