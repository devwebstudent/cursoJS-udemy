/* Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925
Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio'; // Como o nome não vai precisar ser modificado, colocamos ele dentro de uma constante
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80; // Altura em Metros
let imc; // Apenas declaramos a variável, sem atribuir um valor a ela // IMC = peso / (altura * altura)
let anoNascimento;
imc = peso / (alturaEmM * alturaEmM)
anoNascimento = 2024 - idade

// Abaixo, queremos o cálculo do IMC
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg.`);
console.log(`Tem ${alturaEmM}m de altura e seu IMC é de ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`)


// Podemos unir valores utilizando o + para CONCATENAR (juntar) esses valores ou utilizando TEMPLATE STRINGS

/* 
Para utilizar TEMPLATE STRINGS, vamos utilizar a crase e ${nomedavariável}
Dentro do ${} vamos colocar o nome da variável. Quando mandamos executar o código, vai mostrar o valor dela no lugar do nome da variável.
*/