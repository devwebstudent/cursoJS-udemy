/* OPERADORES ARITMÉTICOS (+, -, *, /) 

ADIÇÃO/CONCATENAÇÃO = + -> [Se os dados forem do tipo NUMBER, ele faz a adição; Se os dados forem STRING, faz a concatenação]
SUBTRAÇÃO = -
MULTIPLICAÇÃO = *
DIVISÃO = /
POTÊNCIA = **
RESTO DA DIVISÃO = %

==================== ORDEM DE PRECEDÊNCIA ====================
1 - () -> o que tiver entre parênteses
2 - ** -> potência
3 - *, /, % -> multiplicação, divisão e resto da divisão (o que vier primeiro na conta, da esquerda pra direita)
4 - +, - -> adição e subtração (o que vier primeiro da esquerda pra direita)

*/


/* OPERADORES DE INCREMENTO E DECREMENTO

INCREMENT0 = ++ -> acrescenta +1 ao valor da variável; ele incrementa a variável e já atribui esse valor a ela

--- Não podemos utilizar esse operador com uma CONSTANTE, pois o valor de uma constante nunca se altera.
--- Ele pode ser tanto pré-fixado quanto pós-fixado (++contador, contador++); No caso do pré, ele primeiro faz a conta e depois retorna o valor. No caso do pós, ele executa a ação e depois faz o incremento do valor.


DECREMENTO = -- -> subtrai -1 do valor da variável

*/

/* OPERADORES DE ATRIBUIÇÃO

+=
-=
*=
/=
**=
%=

*/

// ADIÇÃO
const adi1 = 5;
const adi2 = 10;
console.log(adi1 + adi2) // Resultado: 15

// CONCATENAÇÃO (une 2 ou mais valores)
const conc = '5';
console.log(conc + adi2) // Resultado: 510

// SUBTRAÇÃO
const subt1 = 10
const subt2 = 8
console.log(subt1 - subt2) // Resultado: 2

// MULTIPLICAÇÃO
const mult1 = 5
const mult2 = 10
console.log(mult1 * mult2) // Resultado: 50

// DIVISÃO
const div1 = 10
const div2 = 5
console.log(div1 / div2) // Resultado: 2

// POTÊNCIA
const pot1 = 5
const pot2 = 2
console.log(pot1 ** pot2) // Resultado: 25

// RESTO DA DIVISÃO
const rest1 = 10
const rest2 = 3
console.log(rest1 % rest2) // Resultado: 1

// INCREMENTO (pós-incremento)
let contador = 10
console.log(contador++) // Resultado: 10 -> ele primeiro vai mostrar o valor e depois vai fazer INCREMENTO
console.log(contador) // Resultado: 11 -> aqui ele já vai mostrar o valor incrementado.

// INCREMENTO (pré-incremento)
let contador2 = 15
console.log(++contador2) // Resultado: 16 -> nesse caso, ele já vai incrementar e em seguida vai mostrar o valor na tela.

// DECREMENTO (pós-decremento)
let contador3 = 20
console.log(contador3--) // Resultado: 20 -> ele primeiro vai mostrar o valor e depois vai fazer o DECREMENTO.
console.log(contador3) // Resultado: 19 -> que é o valor após o decremento.

// DECREMENTO (pré-decremento)
let contador4 = 25
console.log(--contador4) // Resultado: 24 -> ele primeiro vai fazer o decremento e em seguida mostrar o valor na tela


// Se quisermos SOMAR ou SUBTRAIR de mais de 1 em 1, podemos fazer assim:
const passo = 5 // De quanto em quanto meu número vai pular, que no caso é de 5 em 5.
let contador5 = 0
contador5 = contador5 + passo // Vai receber o contador + o valor que eu quiser, que no caso é de 5 em 5.
console.log(contador5) // Resultado: 5
contador5 = contador5 + passo
console.log(contador5) // Resultado: 10
contador5 = contador5 + passo
console.log(contador5) // Resultado: 15

// Fazendo de maneira SIMPLIFICADA. Por exemplo:
let contador6 = 0;
contador6 += 2; // 2
contador6 += 2; // 4
contador6 += 2; // 6
console.log(contador6) // Resultado = 6


// Cuidado com os tipos de dados que fazemos conta
let num1 = 10
let num2 = '5'
console.log(num1 + num2) // Resultado: 105 -> ele fez a concatenação.
console.log(num1 * num2) // Resultado: NaN (not a number) -> significa que deu algum erro na sua conta, algum tipo de dado não bateu e a conta deu errada.

// Convertendo STRING para NUMBER
num2 = parseInt('5') // Convertemos o '5' (STRING) para um número inteiro (NUMBER). -> parseInt (converte para número inteiro) e parseFloat (converte para número de ponto flutuante) são métodos mais antigos.
console.log(num1 + num2) // Resultado: 15.

// Método mais moderno de converter STRING em NUMBER
let num3 = 70
let num4 = Number('70'); // Number vai convter o dado, que é do tipo STRING, em um NUMBER.
console.log(num3 + num4) // Resultado: 140