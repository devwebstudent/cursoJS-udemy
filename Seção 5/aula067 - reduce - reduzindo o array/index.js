// reduce() -> reduz o array a um único elemento, um único valor
// Conseguimos fazer a função de filter(), map() e reduce() utilizando só o reduce, pois ele é muito versátil. Não é o ideal, mas dá pra fazer.
// Se temos que alterar todos os elementos ou alguns elementos do array, use map()
// Se precisamos filtrar o array, usamos filter()
// Se precisamos reduzir o array a um elemento só, usamos reduce()

// Exemplo: tenho um array que é uma lista de números e quero saber o total da soma daqueles valores, utilizo reduce()

// reduce() vai receber uma função de callback, onde:
// - primeiro parâmetro: acumulador -> vai acumular os valores
// - segundo parâmetro: valor atual
// - terceiro parâmetro: índice do array
// - quarto parâmetro: array original
// Também podemos receber um valor inicial pro meu acumulador, que vai lá no final, depois da função
// Se dermos um console.log() no acumulador, ele vai ter o valor inicial de 0 e depois vai aparecer vários undefined, pois sempre precisamos retornar algum valor qualquer pra que o meu acumulador, a cada iteração do laço, tenha um valor. Se não retornarmos nada, ele não vai ter nenhum valor e vai ficar aparecendo undefined.


// Queremos somar todos esses números do array e retornar a soma total deles
//               0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// A cada iteração do laço vamos ter um elemento do array, um valor

const total = numeros.reduce(function(acumulador, valor, indice, array) {
    console.log(acumulador) // Acumulador começa valendo 0
    acumulador += valor // Acumulador é = valor atual dele + valor a cada iteração    
    return acumulador
}, 0) // valor inicial que vai ir pro acumulador; é opcional, se não mandarmos nenhum valor, o valor inicial do acumulador é o primeiro valor do array

console.log(total) // Resultado: 236 -> o último valor retornado pelo acumulador foi o vaslor que foi pra variável total