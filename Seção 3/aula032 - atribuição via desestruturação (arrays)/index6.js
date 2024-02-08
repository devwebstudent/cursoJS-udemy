// OUTRO MODO DE FAZER A ATRIBUIÇÃO VIA DESESTRUTURAÇÃO DO NOSSO EXEMPLO:

// Índices            0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
const [lista1, lista2, lista3] = numeros;

// Se quisermos acessar o 9 da nossa lista3, fazemos assim:
console.log(lista3[2]) // Estamos acessando o Índice 2 da nossa lista3, que no caso é o 9 // Resultado: 9