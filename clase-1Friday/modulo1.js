function saludar() {
    console.log('hola');
}

let parteDelCuerpo = 'codo';

function saludarConCodo() {
    console.log('hola con ' + parteDelCuerpo);
}

function cambiarParteDelCuerpo(z) {
    parteDelCuerpo = z;
}

module.exports = {
    saludar,
    cambiarParteDelCuerpo,
    saludarConCodo
}