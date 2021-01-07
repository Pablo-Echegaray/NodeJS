const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

let objDeprecateCfg = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}; //corresponde a una configuracion del driver (investigar)

class MongoInterface {
  insert(base, coleccion, documento, callBackFn) {
    MongoClient.connect(url, objDeprecateCfg, function(err, client){
      if (err) {
        console.log(`se produjo un error ${err}`);
        return;
      }
      console.log("conectado");

      const db = client.db(base); //Si esta conectado ira a la base de datos (primer escalon)
      //No es necesario que la base de datos exista, si esta no existe la crea de manera instantanea.
      const collection = db.collection(coleccion); //nos devuelve la coleccion

      collection.insertOne(documento, (err2, resultado) => {
        if (err2) {
          console.log(`se produjo un error ${err2}`);
          callBackFn(err2);
          return;
        }
        console.log(resultado);
        client.close();
        callBackFn(undefined, resultado); //se le pasa "undefined" porque todo funciono bien
      });
    });
  }

  query(base, coleccion, query, callBackFn) {
    MongoClient.connect(url, objDeprecateCfg, function(err, client){
      if (err) {
        console.log(`se produjo un error ${err}`);
        return;
      }
      console.log("conectado");

      const db = client.db(base);
      const collection = db.collection(coleccion);

      query = JSON.stringify(query);
      collection.find(query).toArray((err2, resultado) => {
        if (err2) {
          console.log(`se produjo un error ${err2}`);
          return;
        }
        console.log(resultado);
        client.close();
        callBackFn(undefined, resultado);
      });
    });
  }
  update(base, coleccion, publicID, documento, callbackFn){
    MongoClient.connect(url, objDeprecateCfg, function(err, client){
      if (err){
        console.log(`se produjo un error ${err}`);
        callBackFn(err2);
        return;
      }
      console.log("conectado");

      const db = client.db(base);
      const collection = db.collection(coleccion);

      collection.updateOne({id: publicID}, {$set: documento}, (err2, resultado)=>{
        if(err2){
          console.log(`se produjo un error ${err2}`);
          callBackFn(err2);
          return;
        }
        console.log(`RESULTADO: ${resultado}`);
        client.close();
        callBackFn(undefined, resultado.result);
        return;
      })
    })
  }
  delete(base,coleccion, documento, callBackFn){
    MongoClient.connect(url, objDeprecateCfg, function(err, client){
      if(err){
        console.log(`se produjo un error ${err}`);
        callBackFn(err);
        return;
      }
      console.log("conectado");

      const db = client.db(base);
      const collection = db.collection(coleccion);

      collection.deleteOne(documento, (err2, resultado)=>{
        if(err2){
          //Meter error generado aqui.
          //Sacarlo en la callback function.
          console.log(`se produjo un error ${err2}`);
          callBackFn(err2);
          return;
        }
        console.log(resultado);
        client.close();
        callBackFn(undefined, resultado.result);
      });
    });
  }
}

module.exports =  new MongoInterface;
