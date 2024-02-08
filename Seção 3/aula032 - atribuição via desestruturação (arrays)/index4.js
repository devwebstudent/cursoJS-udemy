// Outra coisa que podemos fazer para fazer atribuição via desestruturação

// Suponha que temos um Array e dentro dele temos outros Arrays
// Cada lista também tem seus índices

// Índices            0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]


// Se quero acessar o número 6. Primeiro preciso acessar o Índice 1 da lista e o Índice 2 da lista que está dentro da lista. Se quero acessar o 6, primeiro tenho que acessar o Índice 1. Se quero acessar alguma coisa dentro desse Índice 1, fazemos:

console.log(numeros[1][2]); // Acessando o índice 2 da lista do índice 1 -> Resultado: 6