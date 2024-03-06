// Não sabemos se vamos precisar utilizar essa função em outra parte do nosso código
// Então podemos jogar essa função como uma função anônima como callback dentro do filter
// Abaixo utilizamos uma arrow function


// Retorne os números maiores que 10
//               0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// Como só temos um parâmetro, podemos remover os parênteses desse parâmetro da arrow function
// Também podemos remover as chaves e o return, pois só temos uma linha na função
const numerosFiltrados = numeros.filter(valor => valor > 10
);
console.log(numerosFiltrados) // Resultado: [ 50, 80, 11, 15, 22, 27 ]