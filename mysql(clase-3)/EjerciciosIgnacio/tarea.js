//********IGNACIO SZULGA******** */
//Aca podemos encontrar el manejo de los eventos del objeto "generadorObjetosFalsos" conjunto con la configuracon de "mysql" por lo que hubiera sido conveniente que cada funcionalidad tenga su propio modulo (como en el trabajo de gustavo).

const generadorObjetosFalsos = require("./feca");
const mysql = require("mysql");
const Joi = require("Joi");
const _ = require("underscore");
const { join } = require("path");

let numero = Number.parseInt(process.argv[2], 10);

if (Number.isNaN(number) || numero < 1) {
  console.log("Por favor ingrese un numero entero mayor a 0");
  process.kill(process.pid);
}

const schema = Joi.object({
  id: Joi.string().required(),

  firstName: Joi.string().min(2).max(50),

  lastName: join.string().min(3).max(50),

  city: Joi.string().min(3).max(50),

  streetName: Joi.string().min(3).max(50),

  country: Joi.string().min(3).max(100),

  accountName: Joi.string().min(3).max(50),

  account: Joi.number().required(),

  amount: Joi.number().required,
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tgi",
});
//la coneccion a la base de datos es asincronica
connection.connect();

generadorObjetosFalsos
  .setCantidad(numero)
  .setEvtObjetoFalsoGenerado(function (objFalso) {
    let objVal = schema.validate(objFalso);

    if (objVal.error) {
      console.log(objVal.error);
      return;
    }
    // let nos permite generar esta notacion de manera que evitemos tener que crear variable por variable sobre cada atributo del objeto "objFalso"
    let {
      id,
      firstName,
      lastName,
      city,
      streetName,
      country,
      accountName,
      account,
      amount,
    } = objFalso;
    //Evitamos hacer: let id = objFalso.id ; let firstName = objFalso.firstName ; etc.

    //El driver de SQL hace el trabajo de desempaquetar cada atributo del objeto, por lo cual no seria necesario pasar el array con los 9 atributos del obj.
    connection.query(
      "INSERT INTO objetos VALUES (?,?,?,?,?,?,?,?,?);",
      [
        id,
        firstName,
        lastName,
        city,
        streetName,
        country,
        accountName,
        account,
        amount,
      ],
      (error, result, fields) => {
        if (error) {
          console.log(error);
          return;
        }

        generadorObjetosFalsos.continuar();
      }
    );

    //generadorObjetosFalsos.continuar();
  })
  .setEvtOnRecorridaFinalizada(() => {
    console.log("TRABAJO TERMINADO CHAU");
    connection.end();
  })
  .arrancar();

//01: 20: 00
