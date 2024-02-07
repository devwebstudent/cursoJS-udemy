// OBS IMPORTANT: Não faça conta com STRINGS. Se precisar fazer conta, converta a STRING para NUMBER.
let num1 = 1500;
let num2 = 2.5;
let num3 = 15;
let num4 = 10.57895512155547;
let num7 = 2850;


num3 = num3.toString(); // MÉTODO MAIS ANTIGO - Convertendo NUMBER para STRING - toString()
num7 = String(num7); // MÉTODO MAIS MODERNO - Convertendo NUMBER para STRING - String()
console.log(typeof num3); // Resultado: string
console.log(typeof num7); // Resultado: string

console.log(num1.toString() + num2); // Se qualquer um dos números for uma STRING é feita uma CONCATENAÇÃO // Resultado: 15002.5
console.log(num1.toString(2)); // Representando o num1 como binário // Resultado: 101110111100
console.log(num4.toFixed(2)); // Para arredondar o número e ele ficar com 2 casas decimais - Não estamos alterando o valor da variável, alteramos apenas o que é mostrado na tela // Resultado: 10.58

console.log(Number.isInteger(num1)); // Função para saber se o número é inteiro // Resultado: true (num1 é um numero inteiro)
console.log(Number.isInteger(num2)); // Resultado: false (pois num2 é um número de ponto flutuante)

let temp = num1 * 'Ola';
let temp2 = num1 * 5;
console.log(temp) // Essa conta de 1500 * Ola não existe, é impossível fazer o cálculo // Resultado: NaN
console.log(Number.isNaN(temp)); // Estamos perguntando para o JavaScript se a conta é inválida // Resultado: true
console.log(Number.isNaN(temp2)); // Nesse caso, vai retornar false, pois a conta é válida // Resultado: false






// IMPRECISÃO DAS CONTAS NO JAVASCRIPT
let num5 = 0.7;
let num6 = 0.1;

num5 += num6; // 0.8
num5 += num6; // 0.9
num5 += num6; // 1.0
num5 += num6; // 1.1
num5 += num6; // 1.2

// console.log(num5) // Note que ao mandarmos mostrar -> Resultado: 0.9999999 (Fazendo até a linha 38)
// num5 = num5.toFixed(2)); // Se deixarmos apenas num5.toFixed(2) a conta vai ter um valor correto aos nossos olhos, mas o problema não foi solucionado de verdade. // Resultado: 1.00
// console.log(num5); // Ao mandar mostrar -> Resultado: 1.00 -> Apesar de estar sendo mostrado que ele tem o valor de 1.00, na verdade ele não tem esse valor.
// console.log(Number.isInteger(num5)) // Agora mandamos checar se num5 é inteiro -> Resultado: FALSE

// PARA SOLUCIONAR O PROBLEMA, FAZEMOS ASSIM:
num5 = Number(num5.toFixed(2)); // Agora sim teremos nosso número verdadeiro - Podemos continuar fazendo nossa conta (linha 39 e 40) // Também podemos usar parseFloat()
console.log(num5); // Ao mandar mostrar, agora temos seu valor real // Resultado: 1.2
console.log(Number.isInteger(num5)); // Mas agora ao mandar exibir, vai dar FALSE, pois num5 agora é um número de ponto flutuante.