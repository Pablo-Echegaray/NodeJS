const uuid = require("uuid");
const faker = require("Faker");
const _ = require("underscore");

let generadorObjetosFalsos = {
  idx: 0,
  cantidad: 0,
  eventos: {
    onObjetoFalsoGenerado: _.identity,
    onRecorridaFinalizada: _.identity,
  },
  setEvtObjetoFalsoGenerado(fn) {
    this.eventos.onObjetoFalsoGenerado = fn;
    return this; //todos los returns aplicados al "this" es lo que nos permitira aplicar el patron observer (parecido a lo que hace una promise) dado que el objeto se retorna a si mismo
  },
  setEvtOnRecorridaFinalizada(fn) {
    this.eventos.onRecorridaFinalizada = fn;
    return this;
  },
  setCantidad(x) {
    this.cantidad = x;
    return this;
  },
  generarObjetosFalsos: function () {
    if (this.idx == this.cantidad) {
      this.eventos.onRecorridaFinalizada();
      return;
    }
    this.idx++;
    const objGenerado = this.generarUnObjetoFalso();
    this.eventos.onObjetoFalsoGenerado(objGenerado);
  },
  continuar: function () {
    this.generarObjetosFalsos();
  },
  abortar: function () {
    this.idx = this.cantidad;
    console.log("abortado");
    this.continuar();
  },
  arrancar: function () {
    this.continuar();
  },
  generarUnObjetoFalso: function () {
    return {
      id: uuid.v4(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      city: faker.address.city(),
      streetName: faker.address.streetName(),
      country: faker.address.country(),
      accountName: faker.finance.accountName(),
      account: faker.finance.account(),
      amount: faker.finance.amount(),
    };
  },
};

//_.identity: es un metodo de la libreria underscore que basicamente nos retorna lo mismo que le pasemos. Es una suerte de neutro de la programacion funcional.

module.exports = generadorObjetosFalsos;
