//*********************************EJERCICIO GUSTAVO UCCI******************************* */

const uuid = require("uuid");
const faker = require("Faker");

class GeneradorObjetosFalsos {
  constructor() {
    this.idx = 0;
    this.cantidad = 0;

    this.eventos = {
      onObjetoFalsoGenerado: () => {},
      onRecorridaFinalizada: () => {},
    };
  }

  setEvtOnObjetoFalsoGenerado(fn) {
    this.eventos.onObjetoFalsoGenerado = fn;
    return this;
  }

  setEvtOnRecorridaFinalizada(fn) {
    this.eventos.onRecorridaFinalizada = fn;
    return this;
  }

  get getIdx() {
    return this.idx;
  }

  get getCantidad() {
    return this.cantidad;
  }

  set setCantidad(x) {
    this.cantidad = x;
  }

  generarObjetosFalsos() {
    if (this.idx >= this.cantidad) {
      this.eventos.onRecorridaFinalizada();
      return;
    }
    this.idx++;
    const objGenerado = this.generarUnObjetoFalso();
    this.eventos.onObjetoFalsoGenerado(objGenerado);
  }

  continuar() {
    this.generarObjetosFalsos();
  }

  abortar() {
    this.idx = this.cantidad;
    this.continuar();
  }

  arrancar() {
    this.idx = 0;
    this.continuar();
  }

  generarUnObjetoFalso() {
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
  }
}

module.exports = GeneradorObjetosFalsos;
