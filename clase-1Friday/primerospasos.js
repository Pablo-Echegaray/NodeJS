/*
Tipos de datos:
  Numericos
  Boolean
  String
  Object
  Array
  Symbol
  function
*/

// Scope let, const

{
let a = 2; 
a = false;
a = {
    saludo:'hola'
};

console.log(a);
}

{
    /*
    let x = 0;
    for (;2==3;) {

    }    
    if (1==2) {}
    while (x != 10) {

    }
    */
}

{
    // functions as data
    // 1, "hola", {nombre:"jose"}, ["red", "azul", 3, {}, 4]
    let fn = z => z + 1;

    function hacerAlgo(entero, unaFuncion) {
        console.log(entero);
        console.log(unaFuncion(entero));
    }
    hacerAlgo(3, fn);
    console.log('FIN');

    var arr = [2,3,4,5,6,6];
    for (let elemento of arr) {
        console.log(elemento);
    }
}