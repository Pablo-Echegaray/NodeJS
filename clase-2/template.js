const Mustache = require('mustache');
const faker = require('Faker');
const uuid = require('uuid');

let strHTML = '<html><body><h1>TGIFriday2</h1></body></html>';

function generar5ObjetosFalsos() {
    let arr = [];
    for (let x = 0; x < 5; x++) {
        arr.push({
            id : uuid.v4(),
            firstName: faker.name.lastName(),
            lastName: faker.name.lastName(),
            city: faker.address.city(),
            streetName: faker.address.streetName(),
            country: faker.address.country(),
            accountName: faker.finance.accountName(),
            account: faker.finance.account(),
            amount: faker.finance.amount()
        });
    }
    return arr;
}

strHTML = [
    '<html>',
    '<body>',
    '{{#arr}}',
    '<h1>',
    '{{id}} - {{firstName}} - {{lastName}} - {{city}}',
    '<hr />',
    '</h1>',
    '{{/arr}}',
    '</body>',
    '</html>'].join('');

// hacer un mix entre texto y datos en javascript 
// el resultante del mix es una salida html

//let htmlFinal = Mustache.render(strHTML, { arr: generar5ObjetosFalsos()});
// console.log(htmlFinal);

const x = generar5ObjetosFalsos();
console.log(JSON.stringify(x));
