/* Na aula anterior vimos os operadores lógicos (AND, OR e NOT). Nessa aula só vamos falar do AND e do OR.

&& -> Todos os valores precisar ser verdadeiros pra que retorne TRUE.
|| -> Todos os valores precisam ser falsos para que retorne FALSE. Qualquer valor verdadeiro torna a expressão TRUE.


AVALIAÇÃO DE CURTO CIRCUITO PARTE 1 - AND &&     -     RESUMO
&& -> true && false && false && true   -> Assim que encontrar um valor avaliado como FALSO, vai retornar o primeiro valor avaliado como FALSE.
&& -> true && true && true && true        -> Se todas forem VERDADEIRO, vai retornar o último valor avaliado como VERDADEIRO. Não tem mais nada pra checar, ele retorna o último valor VERDADEIRO.

A partir do momento que a primeira expressão FALSE aparecer, não preciso checar mais nada, já vai retornar o valor de FALSE. A partir do momento que encontro uma FALSE, eu já paro de checar. Isso é o que chamamos de avaliação de curto-circuito.


/* AVALIAÇÃO DE CURTO-CIRCUITO PARTE 2 - OR ||     -    RESUMO
|| -> false || false || true || true    ->   Quando tiver algum VERDADEIRO, vai retornar o primeiro valor avaliado como VERDADEIRO.
|| -> false || false || false || false  ->   Sempre que todas forem avaliadas em FALSE, vai retornar o último valor avaliado como FALSO. Não tem mais nada pra checar, ele retorna o último valor FALSO.



*/

/* VALORES QUE AVALIAM EM FALSO  (só esses valores são avaliados em falso em JavaScript) - Qualquer coisa diferente disso, avalia em TRUE no JavaScript.
FALSY VALUES:
false -> valor literal
0
"", '', `` -> strings vazias
null / undefined
NaN

*/

// Se estou utilizando uma expressão AND (&&), a partir do momento que o JS encontrar uma expressão que avalia em FALSO em JS, ele vai retornar o valor falso.
console.log('Luiz Otávio' && 0 && 'Maria'); // Resultado: 0

// Se ele não encontra nada falso aqui dentro, ele vai checar todas as expressões e vai me retornar o último valor checado.
console.log('Luiz Otávio' && true && 'Maria'); // Ele vai checar a primeira expressão (verdadeiro), a segunda (verdadeiro) e vai retornar o valor da última, que é verdadeira. // Resultado: Maria




// No caso abaixo, não vai ter avaliação de curto circuito, pois não temos valores falsos. Ele vai checar a primeira expressão (VERDADEIRA (pois não é uma string vazia)); vai checar E 'Maria' (VERDADEIRA) e vai me retornar o último valor que foi checado.
console.log('Luiz' && 'Maria'); // Resultado: Maria

// Se tivéssemos qualquer coisa FALSA, ele vai me retornar esse valor avaliado em FALSO:
console.log('Luiz' && undefined && 'Maria'); // Resultado: undefined





/* VAMOS IMAGINAR QUE TEMOS UMA FUNÇÃO QUE FALA OI, logo abaixo: 
Suponha que preciso fazer uma checagem, um desvio de fluxo para saber se eu vou ou não executar essa ação. E temos uma variável que controla isso, se vai ou não executar essa função.
*/

function falaOi() {
    return 'Oi'
}

let vaiExecutar = NaN; // Ou seja, a minha função não vai executar
console.log(vaiExecutar && falaOi()); // Esse código vai checar a variável. Caso a variável seja falsa, vai acontecer o curto circuito e a função não será executada. O que vai retornar é o valor que avalia em falso. Caso a variável seja verdadeira, ele vai executar nossa função e me retornar 'Oi'.



// VER index2.js para ver sobre o OR (||)


/* RESUMO: AND (&&):



*/