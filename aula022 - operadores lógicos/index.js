/* OPERADORES LÓGICOS

AND - && -> E -> Todos os valores precisar ser VERDADEIROS (true) para o resultado ser VERDADEIRO (true)
OR - || -> OU -> Apenas um valor precisa ser VERDADEIRO para retornar TRUE / Só retorna FALSE se os 2 valores forem FALSE
NOT - ! -> NÃO

*/

// AND - && - E -> Todos os valores precisam ser VERDADEIROS para retornar TRUE
const expressao1 = true && true;
const expressao2 = true && true && false;
console.log(expressao1); // Resultado: true
console.log(expressao2); // Resultado: false



// OR - || - OU -> Apenas um valor precisa ser VERDADEIRO para retornar TRUE / Só retorna FALSE se os 2 valores forem FALSE
const expressao3 = true || false || false || true || false;
const expressao4 = false || false;
console.log(expressao3); // Resultado: true
console.log(expressao4); // Resultado: false - pois os 2 valores eram false



// NOT - ! - NÃO -> Essa negação inverte uma expressão
console.log(!false); // Resultado: true
console.log(!true); // Resultado: false



// EXEMPLO
const usuario = 'Luiz'; // form que usuário digitou
const senha = '12345'; // form que usuário digitou
const vaiLogar = usuario === 'Luiz' && senha === '12345'; // Se as duas expressões forem verdadeiras, vai retornar TRUE
console.log(vaiLogar) // Resultado: true