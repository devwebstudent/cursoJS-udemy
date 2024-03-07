/* RESUMO CHATGPT:

Filter():
O método filter() é usado para filtrar elementos de um array com base em uma condição específica. Ele cria um novo array com todos os elementos que passam pelo teste da função fornecida.

*/

// Exemplo 1: Filtrando números pares de um array
const numeros = [1, 2, 3, 4, 5, 6];
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log(numerosPares); // Saída: [2, 4, 6]



// Exemplo 2: Filtrando usuários com idade maior que 18
const usuários = [
    { nome: 'Alice', idade: 25 },
    { nome: 'Bob', idade: 17 },
    { nome: 'Charlie', idade: 30 }
];

const adultos = usuários.filter(usuário => usuário.idade >= 18);
console.log(adultos); // Saída: [{ nome: 'Alice', idade: 25 }, { nome: 'Charlie', idade: 30 }]



// Exemplo 3: Filtrando palavras com mais de 5 letras
const words = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const longWords = words.filter(word => word.length > 5);
console.log(longWords); // Saída: ['banana', 'orange']