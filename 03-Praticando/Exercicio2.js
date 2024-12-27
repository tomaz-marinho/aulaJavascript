/* O IMC - Indice de Massa Corporal é um critério da Organização Munida da Saúde para dar uma indicção sobre
a condição de peso de uma pessoa adulta.

For mula do IMC:
IMC = peso / (altura * altura)

Elabbore um algiritirmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC  em adultos Condições:
- Abaxio de 18.5 abaixo do peso;
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 acima do peso;
- entre 30 a 40 Obeso
- Acima de 40 Obesidade Grave;

*/

const peso = 101;
const altura = 1.85;
const imc = peso / Math.pow(altura, 2);

console.log(imc);

if (imc < 18.5){
    console.log('Abaixo do peso');
}else if(imc >= 18.5 && imc < 25){
    console.log('Peso normal');
}else if(imc >= 25 && imc < 30){
        console.log('Acima do peso');
}else if(imc >= 30 && imc < 40){
    console.log('Obeso');
}else {
    console.log('Obesidade Grave')
}