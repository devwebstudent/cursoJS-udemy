// CONTINUANDO EXERCÍCIO ANTERIOR: Imagina que queremos pegar o primeiro índice, pular o segundo, pegar o terceiro, pular o quarto, etc.
// Podemos colocar valores vazios na nossa atribuição via desestruturação


// Índices       0     1     2     3     4     5     6     7     8
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, , cinco, , sete] = numeros

console.log(um, tres, cinco, sete) // Resultado: 1000 3000 5000 7000