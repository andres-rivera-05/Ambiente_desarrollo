//funcion para sumar dos números
const { sum } = require('lodash');

function sumarNumeros(a, b) {
  return sum([a, b]);
}

const resultado = sumarNumeros(10, 5);
console.log('El resultado de la suma es:', resultado);