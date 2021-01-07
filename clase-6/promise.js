/* function retornaPromesa() {
  return new Promise((resolve, reject) => {
    console.log("init...");

    setTimeout(function () {
      console.log("init...");
      resolve("resuelto con exito!!!");
      //reject("no se resolvio bien");
    }, 2000);
  });
} */ //encapsulamos una funcion en una promesa.

/* retornaPromesa()
  .then((z) => {
    console.log(z);
  })
  .catch(() => {
    console.log("Aca es como si fuera un error");
  })
  .finally(() => {
    console.log("finally");
  });
 */

/* (async function () {
  for (;;) {
    let x = await retornaPromesa();
    console.log(x);
  }
}()); */
//El for infinito debira ejecutarse rapido, sin embargo al estar dentro de un aync await ejecuta de a una vez y con espera.

/* (async function (cb) {
  for (let x = 0; x < 5; x++) {
    let x = await retornaPromesa();
    console.log(x);
  }
  cb(); //no usar return aca
})(ahoraSiQueTermino);

function ahoraSiQueTermino() {
  console.log("ahora si que termino");
} */

//==================================
//RELACION DE RESOLVE Y REJECT CON TRY Y CATCH
let i = 0;
function retornaPromesa() {
  return new Promise((resolve, reject) => {
    console.log("init...");
    i++;
    console.log(i);
    setTimeout(function () {
      console.log("fin...");
      if (i === 2) {
        reject("error");
        return;
      }
      resolve("resuelto con exito!!!");
    }, 2000);
  });
}

//try catch en async await
(async function (cb) {
  for (let x = 0; x < 4; x++) {
    try {
      //resolve(x)
      let x = await retornaPromesa();
      console.log(x);
    } catch (err) {
      //reject(err)
      console.log(err);
    }
  }
  cb(); //no usar return aca
})(ahoraSiQueTermino);

function ahoraSiQueTermino() {
  console.log("ahora si que termino");
}

//LO SIGUIENTE DE LA CLASE FUE REFACTORIZAR EL CODIGO DEL ARCHIVO "subirArchivosMongoDB.js" para realizarlo utilizando promise y async await. (la refactorizacion la hize en la carpeta de la clase-4 : "subirAMongoAA");
