// Relembrando aquele exercício onde deveríamos mudar o valor das variáveis, do exercício com variáveis.
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

// O que está do lado esquerdo é a desestruturação. Estou criando as variáveis a, b e c. Como elas já existem, estou reatribuindo o valor delas, estou modificando o valor dessas variáveis para B, C e A.
// O que tem do lado direito é um ARRAY

const letras = [b, c, a];
[a, b, c] = letras; // a tem o valor de B, b tem o valor de C, e c tem o valor de A
// Para cada índice desse array estou atribuindo um valor de alguma variável

console.log(a, b, c)

// ISSO FOI SÓ PARA RELEMBRAR O EXERCÍCIO, VER A CONTINUAÇÃO NO index2.js