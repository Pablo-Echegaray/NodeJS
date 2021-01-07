const { response } = require("express");
const express = require("express");
const http = require("http");
const app = express();

/* app.use(express.static("public"));
app.use("/static", express.static(__dirname + "/public"));

app.get("/usuario", (request, response) => {
  console.log(request.query); //devuelve un objeto con los parametros nombre y apellido
  //console.log(response);
  response.status(200).send("gracias por elegirnos");
});

app.listen(3000, function () {
  console.log("Aplicacion ejemplo, escuchando el puerto 3000!");
}); */

//-----------------------------------------

app.use(express.static("public")); //tendremos una carpeta "public" y dentro de ella un index.html que estara dado por default. En "public" esta todo aquello que es publico.
app.use("/static", express.static(__dirname + "/public"));
//body parser
app.use(express.json());
app.get("/usuario", (request, response) => {
  console.log(request.query);
  let arrObj = [
    { id: 1, nombre: "Sofia", apellido: "Zapata" },
    { id: 2, nombre: "Vladi", apellido: "Echegaray" },
  ];
  response
    .writeHead(200, {
      "Content-Type": "application/json",
    })
    .end(JSON.stringify(arrObj));
});

app.post("/usuario", (request, response) => {
  console.log(request.body); //nuevo usuario insertado en el body del request en postman (*)[ir a tarea.txt]
  response
    .writeHead(200, {
      "Content-Type": "application/json",
    })
    .end(JSON.stringify({ resultado: "usuario insertado" }));
}); //POST : Para hacer un alta de usuario.

app.put("/usuario", (request, response) => {}); //PUT: Para modificar un usuario.

app.delete("/usuario", (request, response) => {}); //DELETE: Para borrar un usuario.

app.listen(3000, function () {
  console.log("Aplicacion ejemplo, escuchando el puerto 3000!");
});

// 02:31:45
