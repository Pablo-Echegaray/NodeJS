// *******************************EJERCICIO GUSTAVO UCCI******************************

const GeneradorObjetosFalsos = require("./feca2");
const Dbm = require("./test");

//creo un objeto falso
let gOF = new GeneradorObjetosFalsos();

//fijo la cantidad a generar
gOF.setCantidad = 5;

let odbm = new Dbm();
odbm.createConnection();
odbm.connect(); //aqui es donde deberia poner el callback y dentro del mismo poner todas las funcionalidades que siguen en la ejecucion del programa.
//Esa es una opcion, o la otra seria manejarlo con una promesa: algo así : odbm.onConnectionEstablished(()=>{})
//------------------odbm.onQueryFinish(()=>{})
//le asigno el listener que manejara el evento 'onObjetoFalsoGenerado'
gOF.setEvtObjetoFalsoGenerado(function (objFalso) {
  console.log(objFalso);

  odbm.query(
    "INSERT INTO objetofalso SET ?",
    objFalso,
    function (error, results) {
      if (error) {
        console.log(error);
        gOF.abortar();
        return;
      }

      console.log(
        `insertId: ${results.insertId}, affectedRows: ${results.affectedRows}`
      );

      console.log(`gOF.getIdx:  ${gOf.getIdx}`);
      console.log("gOF.getCantidad:  ${gOF.getCantidad}");

      gOF.continuar();
    }
  );
});
//le asigno el listener que manejara el evento 'OnRecorridaFinalizada'
gOF.setEvtOnRecorridaFinalizada(function () {
  odbm.end();
  console.log("Me voy a comer");
});
//lanzo la generacion de objetos falsos y su escritura a archivos
gOF.arrancar();

//INSERT EN SQL:

//INSERT INTO objetoFalso SET id = ?, nombre = ?,

//El driver "query" nos da la posibilidad de pasarle un objeto y que este se encargue de hacer el trabajo de setear el id, el nombre etc.

//Para ello: INSERT INTO objetoFalso SET ?

//Implicitamente haria lo siguiente: id = objFalso.id, nombre = objFalso.nombre.

//OTROS STATMENT DE SQL:

//INSERT: Inserta y actualiza los indices

//UPDATE WHERE: Actualiza en funcion de un WHERE de manera que debo pasarle que es lo que quiero actualizar.

//DELETE WHERE: En funcion de un WHERE que es lo que quiero borrar.

//SELECT: Podria tener el WHERE o no.

//Crear la tabla objetosfalsos:
//script SQL:

/* CREATE TABLE `objetofalso`(
    `Id` varchar(50) NOT NULL,
    `firstName` varchar(50) NOT NULL,
    `lastName` varchar(50) NOT NULL,
    `city` varchar(50) NOT NULL,
    `streetName` varchar(50) NOT NULL,
    `country`  varchar(50) NOT NULL,
    `acountName` varchar(50) NOT NULL,
    `acount`  varchar(50) NOT NULL,
    `amount`  varchar(50) NOT NULL
 ) ENGINE = InnoDB DEFAULT  CHARSET=utf8mb4; */

//01:31:00
