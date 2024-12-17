
/*
  const numero = 2

  const numeroPar = (numero % 2) === 0;
  console.log(numeroPar);
  
  if(numeroPar){
    console.log('Par');

  }

  if(!numeroPar){
    console.log('Impar');

  } 
    --------------------------------------------------*/

/* AULA DE ESTRUTURA CONDICIONAIS

const numero = 3

const numeroPar = (numero % 2) === 0;
 
 
if(numeroPar){
  console.log('Par');
 
}else{
  console.log('Impar');
}
--------//-------------//----------------//-

const numero = 15;
const numeroDivisivelPor5 = (numero % 5) === 0;
 
if(numero === 0){
  console.log('O numero é invalido');
}

else if(numeroDivisivelPor5){
  console.log('Sim');
 
}else{
  console.log('Não');
}
--------------------------------------------------*/

/* REVISÃO E DICAS DE BOAS PRATICAS
 
REDUZINDO A ESTRUTURA 

const numero = 15;
 
if(numero % 5) === 0){
  console.log('O numero é Par');

}else {
  console.log('O numero é Impar');
}*/

/*
--------------------------------------------------
Incremento do Calculo de Valor de Uma Viagem 

Questionário:

Faça um programa para calcular o valorr de uma viagem.

você terá 5 variáveis. Sendo elas:

1 - Preço do Etanol;
2 - preço da gasolina;
3 - o tipo de combustivel que está no seu carro;
4 - gasto médio do combustivel do caarro por km;
5 - distância em km d viagem; 

Imrima ano console o valor que eserá gasto para realizar esta viagem.

*/

const precoEtanol = 5.79;
const precoGasolina = 6.66
const kmPorLitro = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitro;


if (tipoCombustivel === 'etanol') {
  const valorGasto = litrosConsumidos * precoEtanol;
  console.log(valorGasto.toFixed(2));
} else {
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log(valorGasto.toFixed(2));
}






