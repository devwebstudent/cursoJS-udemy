// Mais um exemplo - Fazendo de outra forma o jeito do index4.js -> JEITO COMPLEXO

// Índices            0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

// Pegando o número 6:
// Não quero o Índice 0, então colocamos uma vírgula para pular. Quero o Índice 1. Desse Índice 1, não quero nem o Índice 0 e nem o Índice 1 dele, quero só o Índice 2, que é onde está o 6.
const [, [, , seis]] = numeros
console.log(seis) // Resultado: 6