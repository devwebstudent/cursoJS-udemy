/* OPERADORES DE COMPARAÇÃO (comparam 2 valores):

> -> Maior que -> Checa se um valor é maior que o outro
>= -> Maior ou igual -> Checa 2 coisas - se o valor é maior ou igual ao outro valor
< -> Menor que -> Checa se um valor é menor que o outro
<= -> Menor ou igual -> Checa 2 coisas - se o valor é menor ou igual ao outro valor

== -> Igualdade -> só checa valor // Obs.: Não é recomendável que utilizemos este
=== -> Igualdade estrita -> checa valor e o tipo
!= -> Diferente -> só checa valor // Também não vamos utilizar
!== -> Diferente estrito -> checa valor e o tipo


Obs.: Sempre que utilizamos esses operadores, o que vai retornar é um resultado com valor BOOLEAN (true ou false).
*/
const comp1 = 10 > 5;
console.log(comp1); // Resultado: true

const comp2 = 10 >= 15;
console.log(comp2); // Resultado: false

const comp3 = 10 < 11;
console.log(comp3); // Resultado: true

const comp4 = 10 <= 5;
console.log(comp4); // Resultado: false




// OPERADORES DE IGUALDADE E DIFERENÇA -> Não utilizar == e !=
// == (Não utilizar)
const num1 = 10; // number
const num2 = '10'; // string
const comp5 = num1 == num2; // Checa apenas o valor
console.log(comp5); // Estamos comparando um NUMBER e uma STRING; Vai dar true, pois o == só compara valores, não tipos // Resultado: true

// === (Utilizar, pois ele vai comparar o VALOR e o TIPO)
const num3 = 20;
const num4 = '20';
const comp6 = num3 === num4; // Checa o valor e o tipo
console.log(comp6); // Resultado: false



// != (Não utilizar)
const num5 = 15;
const num6 = '15';
const comp7 = num5 != num6; // Checa apenas o valor
console.log(comp7); // Resultado: false

// !== (Utilizar, pois ele checa o VALOR e o TIPO)
const num7 = 20;
const num8 = '20';
const comp8 = num7 !== num8; // Checa o valor e o tipo
console.log(comp8); // Resultado: true