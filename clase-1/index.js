/* function decirHola(){
    console.log('Hola');
}

function llamarOtra(fn){
    if(!fn){
        console.log('Atencion no recibi ninguna funcion');
        return;
    }
    fn();
}
llamarOtra(decirHola); */

/* function decirHola(subindice){
    console.log(`Hola${subindice}`);
}

function llamarOtra(fn){
    if(!fn){
        console.log('Atencion no recibi ninguna funcion');
        return;
    }
    for(let idx=0; idx<100; idx++){
    fn(idx);
    }
}
llamarOtra(decirHola); */

//>>>TRAER UN MODULO<<<
/* const _ = require('underscore');
//underscore es una libreria.
function saludar(){
    console.log('hola a todos');
}
_.times(4, saludar); */
//hola a todosx4
//sinonimos sintacticos
//_.times(4, ()=>saludar());

//>>>PROGRAMACION FUNCIONAL<<<
/* function suma(x){
    return function(y){
        return x + y;
    }
}
let total = suma(2)(4);
console.log(total); */

//Programacion funcional>partial aplication>retornamos una funcion  y el valor que le pasemos se le sumara al valor retornado.

/* function suma(x){
    return function(y){
        return x + y;
    }
}
let suma5 = suma(5);
let suma6 = suma(6);
let suma10 = suma(10);
console.log(suma10(100)); */

//Programacion funcional>partial aplication con 'underscore'
/*  const _ = require('underscore'); */
/*function sumar(x, y){
    return x + y;
}
let suma10 = _.partial(sumar, 10);
console.log(suma10(10)); */

//ForEach en underscore
/* _.forEach([1,2,3,4,5], z =>{
    console.log(z);
}) */

//>>>MUESTRA ASINCRONICA<<<
/* function decirHola(){
    setTimeout(()=>console.log('hola'), 0);
}
decirHola();//se encola en otro stack de ejecucion.
console.log('orden de ejecucion'); */

/* const _ = require('underscore');

function decirMensaje(mensaje){
    setTimeout(()=>console.log(mensaje), 3000);
}
//console.log(_.range(10));//me genera un array de la cantidad de elementos que le pase como parametro.
_.range(10).forEach((z) => {
    decirMensaje(`hola ${z}`); 
})*/
//este bloque de codigo generara un request que en principio tardara 3 segundos pero inmediatamente pedira los datos todos juntos al mismo tiempo. Esto se nos presenta como un problema si lo que tenemos qque hacer, por ejemplo, son 1000 pedidos a una base de datos, en done necesitariamos claramente tener una manera de controlar esto y hacer un request de a uno por vez.

//>>>Primera aproximacion para resolver lo anterior<<<

/* function decirMensaje(mensaje, callback){
    setTimeout(()=>{
        console.log(mensaje);
        callback()
    }, 3000);
}
//Recursion
(function outter(){
    let x = 0;//variable de control
    (function inner(){
        if(x < 10){
            decirMensaje(x, ()=>{
                x++;
                inner();
            })
        }
    })();
})();
 */

//>>>FUNCTION AS DATA: 
/* let fn = z => z + 1;

function hacerAlgo(entero, unaFuncion){
    console.log(entero);
    console.log(unaFuncion(entero));
}
hacerAlgo(3, fn); */

//>>>Optimizaciones de los lenguajes de programacion<<<

/* var arr = [2,3,4,5,6,7];
//Forma canonica
for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log('*************************')
//Forma optimizada
for(let elemento of arr){
    console.log(elemento);
} */

/****************************************/
//>>>>>Modulo<<<<<
/* function saludar(){
    console.log('hola' +' '+ x);
}
function persona(nombre){
   x = nombre
}
function despedir(){
    console.log('adios');
}
//Objeto que contiene las funciones de mi modulo que voy a estar exportando.
//Forma canonica: 
//module.expoorts = {
    //saludar : saludar,
    //despedir : despedir
//}
//Desestructuracion de Objetos:
let x = 'Vladi';
module.exports = {
    saludar,
    despedir,
    persona,
} */
//>Todo lo que yo inscriba en el modulo y no exporte, sera privado de ese modulo y no tendre acceso desde otros lugares. 

//>>>CONDICIONAL TERNARIO<<<

//Sintaxis :condición ? expr1 : expr2. Si la condición es true, el operador retorna el valor de la expr1; de lo contrario, devuelve el valor de expr2. También es posible realizar evaluaciones ternarias múltiples (Nota: El operador condicional es asociativo):

var firstCheck = false,
secondCheck = false,
access = firstCheck ? "Acceso Denegado" : secondCheck
? "Acceso Denegado" : "Acceso Permitido";
console.log( access ); //devuelve "Acceso Permitido"

//>>>OPERADOR REST<<<
//El operador Rest es exactamente igual a la sintaxis del operador de propagación, y se utiliza para desestructurar arrays y objetos. En cierto modo, Rest es lo contrario de spread. Spread 'expande' un array en sus elementos, y Rest recoge múltiples elementos y los 'condensa' en uno solo. La sintaxis de los parámetros rest nos permiten representar un número indefinido de argumentos como un arreglo.

//En el siguiente ejemplo, se usa un parámetro rest para agrupar todos los argumentos después del primero. Luego cada uno es multiplicado por el primero y el arreglo es regresado:

/* function multiply(multiplier, ...theArgs) {
    return theArgs.map(function (element) {
    return multiplier * element;
    });
    }
    var arr = multiply(2, 1, 2, 3);
    console.log(arr); *///[2,4,6]
///////////////////////////////////////////
//Otros ejemplos del operador REST:

// La sintaxis de Destructuring assignment es una expresión de JavaScript que permite desempaquetar valores de matrices o propiedades de objetos en variables distintas.
/* ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); */ // {c: 30, d: 40}

//La asignación de desestructuración utiliza una sintaxis similar, pero en el lado izquierdo de la asignación para definir qué valores desempaquetar de la variable de origen.

/* const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
console.log(x) *///[1, 2, 3, 4, 5]

//Array destructuring
//Basic variable assignment
/* const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); */ // "three"

//>Valores predeterminados<: A una variable se le puede asignar un valor predeterminado, en el caso de que el valor desempaquetado de la matriz no esté definido

/* let a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); */ // 7

//>Intercambio de variables<: Se pueden intercambiar dos valores de variables en una expresión de desestructuración. Sin asignación de desestructuración, el intercambio de dos valores requiere una variable temporal (o, en algunos lenguajes de bajo nivel, el truco de intercambio XOR).

/* let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); */ // [1,3,2]

//>Analizar una matriz devuelta desde una función<: Siempre ha sido posible devolver una matriz de una función. La desestructuración puede hacer que trabajar con un valor de retorno de matriz sea más conciso. En este ejemplo, f () devuelve los valores [1, 2] como su salida, que se puede analizar en una sola línea con desestructuración.

/* function f() {
    return [1, 2];
  }
  
  let a, b; 
  [a, b] = f(); 
  console.log(a); // 1
  console.log(b);  */// 2

//>Ignorando algunos valores devueltos<: Puede ignorar los valores de retorno que no le interesan:  
function f() {
    return [1, 2, 3];
  }
  
  const [a, , b] = f();
  console.log(a); // 1
  console.log(b); // 3
  
  const [c] = f();
  console.log(c); // 1

//>>>CLOSURES<<<
//En JavaScript podemos tener N funciones dentro de otra función, y cada función "contenida" tiene acceso a las variables de las funciones de nivel superior (contenedora), a eso se le llama closure.

var main = function(){
    var name = "John";
    function child1(){
        console.log("hi "+name);
    }
    function child2(){
        console.log("bye "+name);
    }
    function change(){
        name = "Rita";
        child1();
        child2();
    }
    child1();
    child2();
    change(); 
    }
    main();
//hi John - bye John - hi Rita - bye Rita.

//pagina 14/19 material de lectura.
