const eventos = require('./lib/eventos');

eventos.funciones.hacerA();

setTimeout(()=>{
    eventos.suscribe(eventos.EVENTO_X_TIEMPO, ()=>{
      console.log(new Date().getMilliseconds());
    });
}, 10000);//durante los primeros 10 segundos no hara nada y luego eventualmente se suscribira a algunos eventos. Esta nocion nos puede servir para hacer determianada cosa en funcion de lo que susceda al conectarse e interactuar a una base de datos.