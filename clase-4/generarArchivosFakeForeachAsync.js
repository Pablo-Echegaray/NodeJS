const ObjetoFalso = require("./lib/ObjetoFalso");
const forEachAsync = require("./lib/forEachAsync");
const fs = require("fs");

/*Genero un array de objetos falsos*/

let arrObjFalsos = [];

for (let i = 0; i < 5; i++) {
  arrObjFalsos.push(new ObjetoFalso());
}
//Si intentamos escribir el archivo dentro del for, se puede hacer, pero estariamos abriendo muchos threads al mismo tiempo, cosa que no es conveniente.
console.log(arrObjFalsos);

forEachAsync(
  arrObjFalsos,
  (objFake, next, abort) => {
    console.log(objFake);
    let path = `/Users/Operador/Desktop/archivosFake/${objFake.id}.json`;
    fs.writeFile(path, JSON.stringify(objFake), "utf-8", (err) => {
      if (err) {
        abort();
        return;
      }
      next();
    });
  },
  () => {
    console.log("fin del proceso");
  }
);

//---------------------------------
//foreach con un segundo proceso encadenado de un foreach mas
//------------------------------------
/* forEachAsync(
  arrObjFalsos,
  (objFake, next, abort) => {
    console.log(objFake);
    let path = `/Users/Operador/Desktop/archivosFake/${objFake.id}.json`;
    fs.writeFile(path, JSON.stringify(objFake), "utf-8", (err) => {
      if (err) {
        abort();
        return;
      }
      next();
    });
  },
  () => {
    console.log("fin del proceso");
    setTimeout(segunda, 5000);
  }
);

function segunda() {
  forEachAsync(arrObjFalsos, (objFake, next, abort) => {
    console.log(objFake);
    setTimeout(next, 2000);
  });
} */
//dado que este segundo caso no seteamos el onFinish del foreachasync, nos dara un error al final, por lo cual debemos setear que pasara si onFinish viene undefined.
//46:00
