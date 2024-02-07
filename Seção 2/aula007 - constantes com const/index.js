// Não posso declarar uma constante sem atribuir um valor a ela, como fizemos com let. Ela sempre DEVE ter um valor desde que é criada.
// Também não podemos modificar o valor de uma constante.
const nome = 'João';
console.log(nome);

const primeiroNumero = 5; // Dado tipo NUMBER
const segundoNumero = 10; // NUMBER
const terceiroNumero = '20';
const resultado = primeiroNumero * segundoNumero; // Multiplicando a primeira constante pela segunda - Resultado: 50
const resultadoDuplicado = resultado * 2 // Resultado: 50 * 2 = 100
let resultadoTriplicado = resultado * 3 // Resultado: 50 * 3 = 150
resultadoTriplicado = resultadoTriplicado + 5 // Resultado: 150 + 5 = 155 - Perdemos o valor inicial dessa variável, que era de 150. Agora ela vai estar valendo 155
console.log(resultado) // Resultado: 50
console.log(resultadoDuplicado) // Resultado: 100 (o valor de resultado * 2)
console.log(resultadoTriplicado)

console.log(typeof primeiroNumero) // Resultado: number
console.log(primeiroNumero + segundoNumero) // Resultado: 15
console.log(segundoNumero + terceiroNumero) // Resultado: 1020 - Dá esse resultado pois ele CONCATENA (junta) os valores, que no caso é uma STRING + NUMBER


/*

===== REGRAS PARA A CRIAÇÃO DE CONSTANTES =====
- Não pode contar palavras reservadas pela linguagem (console, var, let, function, if);
- Constantes precisam ter nomes significativos (variável nome para nome, variável idade para idade, etc.). Isso evita confusão no nosso código;
- Constantes não podem começar com número
- Constantes não podem conter espaços e traços. Nesse caso, podemos substituir o espaço e o traço pelo _ (underline);
- Utilizamos camelCase por convenção (a primeira letra minúscula e as próximas palavras começando com maiúscula) - Ex: const nomeCompleto = 'Luiz Otávio';
- Constantes são case sensitive (letras maiúsculas e letras minúsculas fazem diferença) -> Ex: const nome é diferente de const Nome;
- Não podemos modificar o valor de uma constante

----- NÃO UTILIZE VAR, UTILIZE CONST -----

*/