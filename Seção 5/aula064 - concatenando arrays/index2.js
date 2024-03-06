// Outra maneira de fazer a concatenação de arrays: utilizando spread operator (...)
// O spread operator funciona tanto em ARRAYS quanto em OBJETOS

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

// Espalhando o array 1 e espalhando o array 2 dentro da variável a3
// Estamos puxando valores de outros arrays para nosso array a3
const a3 = [...a1, ...a2, 'Luiz', ...[7, 8, 9]]

// No caso do [7, 8, 9] se quisermos os valores fora do array, temos que espalhar esse array usando ...
console.log(a3) // [ 1, 2, 3, 4, 5, 6, 'Luiz', 7, 8, 9 ]