// Concatenando arrays
// Temos um método no array que se chama concat()
// a3 vai ser a junção de a1 e a2


const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

// Ou seja, concatenando a1 com a2
// Também podemos continuar a colocar valores dentro do a3
const a3 = a1.concat(a2, [7, 8, 9], 'Luiz')
console.log(a3) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Luiz' ]