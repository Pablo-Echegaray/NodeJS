function sumar(z) {
    return function(y) {
        return z + y;
    }
}

let sumar10 = sumar(10);
let sumar16 = sumar(16);

console.log(sumar10(5));
console.log(sumar10(10));
