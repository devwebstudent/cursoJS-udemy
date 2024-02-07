/* AVALIAÇÃO DE CURTO-CIRCUITO PARTE 2 - OR ||     -    RESUMO

|| -> false || false || true || true    ->   Quando tiver algum VERDADEIRO, vai retornar o primeiro valor avaliado como VERDADEIRO.
|| -> false || false || false || false  ->   Sempre que todas forem avaliadas em FALSE, vai retornar o último avaliado como FALSO.

*/

// O console.log vai exibir apenas um desses valores. Ele precisa apenas de uma expressão verdadeira para retornar o valor verdadeiro. Então ele vai parar em 'Luiz Otávio', pois ele não é uma string vazia e nem um valor que avalia em falso.
// Ele vai me retornar o primeiro valor verdadeiro.
console.log(0 || false || null || 'Luiz Otávio' || true); // Resultado: Luiz Otávio




// EXEMPLO - Se o usuário não selecionar nenhuma cor, se for nulo, eu uso a minha cor padrão.
const corUsuario = null; // null é um valor que avalia em falso; 'preto' é verdadeiro, pois não é uma string vazia
const corPadrao = corUsuario || 'preto'
console.log(corPadrao); // Resultado: preto

// Mudando o exemplo acima - Se o usuário seleciona alguma cor, uso essa cor.
const corUsuario2 = 'vermelho';  // vermelho é avaliado como verdadeiro, pois não é uma string vazia
const corPadrao2 = corUsuario2 || 'preto';
console.log(corPadrao2);  // Vai retornar o primeiro valor verdadeiro encontrado // Resultado: vermelho


// OUTRO EXEMPLO - Qual valor vai ser exibido na tela?
const a = 0;
const b = null;
const c = 'Joãozinho'; // Aqui é uma STRING que contém a palavra 'Joãozinho'. É uma string que não é vazia, então é considerado verdadeiro.
const d = false;
const e = NaN;
console.log(a || b || c || d || e); // Vai retornar o primeiro valor verdadeiro, que no caso é a STRING 'Joãozinho' // Resultado: Joãozinho

// EXEMPLO ACIMA MODIFICADO - Sempre que todas forem avaliadas em FALSE, vai retornar o último FALSO.
const f = 0;
const g = null;
const h = false;
const i = false;
const j = NaN;
console.log(f || g || h || i || j); // Vai retornar o último valor false avaliado. // Resultado: NaN



/*
Resumindo: posso fazer estruturas lógicas utilizando tanto AND (que não utilizo tanto), ou OR (utilizo bastante)
*/