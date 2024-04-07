// Fatiando nosso array - array.slice()

//                 0         1        2         3         4
const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];

// Quero pegar do índice 1 até o índice 2 (sempre coloco um índice a mais dentro do parênteses, pois o índice final não é incluído)
const novo = nomes.slice(1, 3)

console.log(novo) // [ 'Maria', 'Joana' ]


// Também podemos utilizar números negativos no slice
// Fatiando começando do índice 0 e remover -1 do final (Rosana)
const novo2 = nomes.slice(0, -1)
console.log(novo2) // [ 'Eduardo', 'Maria', 'Joana', 'Wallace' ]