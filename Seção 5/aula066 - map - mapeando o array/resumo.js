/* RESUMO CHATGPT:

Map():
O método map() é usado para iterar sobre todos os elementos de um array e modificar cada elemento de acordo com uma função específica, retornando um novo array com os elementos modificados.

*/

// Exemplo 1: Dobrando todos os números de um array
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Saída: [2, 4, 6, 8, 10]



// Exemplo 2: Convertendo temperaturas de Celsius para Fahrenheit
const celsiusTemperatures = [0, 10, 20, 30, 40];
const fahrenheitTemperatures = celsiusTemperatures.map(celsius => (celsius * 9/5) + 32);
console.log(fahrenheitTemperatures); // Saída: [32, 50, 68, 86, 104]



// Exemplo 3: Transformando strings em maiúsculas
const fruits = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercasedFruits); // Saída: ['APPLE', 'BANANA', 'KIWI', 'ORANGE', 'GRAPE']