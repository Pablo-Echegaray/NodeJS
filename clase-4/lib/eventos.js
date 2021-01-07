let mapaEventos = {};

const EVENTO_X_TIEMPO = 'EVENTO_X_TIEMPO';

function suscribe(idStr, fn){
    mapaEventos[idStr] = fn;
};

function hacerA(){
   (function inner(){
       if(mapaEventos[EVENTO_X_TIEMPO]){
           mapaEventos[EVENTO_X_TIEMPO].apply();
       }
       setTimeout(inner, 2000);
   }());
};//patron de diseño mediador que no nos reportara nada hasta tanto no nos suscribamos al evento. 

function hacerB(){

};

module.exports = {
    EVENTO_X_TIEMPO,
    suscribe,
    funciones: {
       hacerA,
       hacerB
    }
};