/*Faça um programa para calcular o valo de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gastos médio do combustivel do carro por KM;
3 - Distancia em KM da viagem;

imprimir no console o valor que será gasto.
*/

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaEmKm = 2080;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const gasto = litrosConsumidos * precoCombustivel;


console.log (gasto.toFixed(2));