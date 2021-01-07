//CLASE 3 CALLSTACK: Ejemplo 1

/* class Observado {
    constructor() {
      this.idx = 0;  
      this.dato = null;
      this.evt ={
        fnOnGetDato: ()=>{}
      }
    }
    mostrarSubIndice(){
        console.log(this.idx);
        this.idx++;
    }
    setCallBackOnGetDato(fn){
      console.log('setCallBackOnGetDato');
      this.mostrarSubIndice();  
      this.evt.fnOnGetDato = fn;
    }
    setearDato(dato) {
      console.log('setearDato');
      this.mostrarSubIndice();    
      this.dato = dato;
      return this;
    }
    getDato() {
      console.log('getDato');
      this.mostrarSubIndice();  
      setTimeout(()=>{
        this.evt.fnOnGetDato(this.dato);
      }, 2000);
      return this;
    }
  }
  
  let observado = new Observado();
     observado
         .setearDato("Hello World")
         .getDato()
         .getDato()
         .getDato()
         .setCallBackOnGetDato((z)=>{console.log(z);
         }); */

//EJEMPLO 2 DE CALL STACK --------------------------------------
/* function m1(){
    console.log("antes de llamar a m2");
    m2();
    console.log("despues de llamar a m2");
}      

function m2(){
    console.log("antes de llamar a m3");
    m3();
    console.log("despues de llamar a m3");
} 

function m3(){
    console.log("antes de llamar a m4");
    m4();
    console.log("despues de llamar a m4");
} 

function m4(){
    console.log("antes de llamar a m5");
    m5();
    console.log("despues de llamar a m5");
} 

function m5(){
    console.log("antes de llamar a m6");
    m6();
    console.log("despues de llamar a m6");
} 

function m6(){
    console.log("llegue a M6");
    //m6() "stack overflow" se llena la pila de un constante llamado a m6 (entra en un loop interminable)
    console.log("---------------------");
    //setTimeout(m1, 0); //una vez que se haya vaciado el stack sincronico se ejecuta la funcion asincrona.
} 

m1(); */

//Mientras un proceso este activo, todo lo que esta encolado permanecera en la cola. Recien cuando termine el proceso y se libere el stack, ahi recien ejecutara aquello que esta encolado.

//EJEMPLO 3:

setTimeout(()=>console.log("chau"),0);

for(let i = 0; i < 10; i++){
    console.log([i, "Hola"].join(' - '));
}

