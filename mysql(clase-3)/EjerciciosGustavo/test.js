const mysql = require("mysql");
/* const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cursonode",
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

connection.end(); */

//===========================================================================================================
//Correccion de tarea Clase 3:

//Inversion de control o inversion de dependencia: pasar una funcion y que esta se encargue de ir a buscar los datos que necesita (ya sea a una base de datos o a cualquier otro lugar). Esta funcion puede ser sincronica o asincronica.

//Single Responsability Principles: Los objetos deberian tener una sola razon para cambiar.

//========================================================
//EJERCICIO GUSTAVO UCCI (corresponderia al archivo dbm.js)
//=======================================================
//Inversion de control o inversion de dependencia
/*class Dbm{
   constructor(fnInicializacion){
     this.options = fnInicializacon();
   }

  new Dbm(()=>{
    host : 'localhost',
    user : 'root',
    password: "",
    database: "cursonode",
  }) 
}*/
class Dbm {
  constructor() {
    this.options = {
      host: "localhost",
      user: "root",
      password: "",
      database: "cursonode",
    };
    this.connection;
  }

  createConnection() {
    this.connection = mysql.createConnection(this.options); //anda bien de casualidad dado que la coneccion es asincrona (segun profesor)
    console.log("creando conexion...");
    return this;
  } //despues de tirar un createConnection no se puede tirar un query de inmediato, dado que se debe esperar que la conexion termine (porque es asincrona) por eso esta implementacion del codigo no seria correcta.  mysql.createConnection(this.options) deberia ser asincronica, estar dentro de un callback como segundo parametro de createConnection()

  connect() {
    this.connection.connect();
    console.log("conectado");
    return this;
  }

  query(cmd, values, fn) {
    this.connection.query(cmd, values, fn);
    return this;
  }

  end() {
    this.connection.end();
    console.log("conexion terminada");
    return this;
  }
}

module.exports = Dbm;
