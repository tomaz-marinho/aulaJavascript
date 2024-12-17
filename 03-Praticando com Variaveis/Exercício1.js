
/*-------------------------------------------------------------
Exercício 1 - Média de Notas 

faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a 
aua média e a sua classiicação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:

- Média menor que 5, reprovado ;
- Média entre 5 e 7, recuperação;
- Média maior que 7, passou de semestre; */



const nota1 = 5;
const nota2 = 3;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

console.log(media.toFixed(2));

if (media < 5) {
  console.log('Reprovado');

} else if (media >= 5 && media <= 7){
  console.log('Recuperação');

}else{
  console.log('Passou de Semestre');
}