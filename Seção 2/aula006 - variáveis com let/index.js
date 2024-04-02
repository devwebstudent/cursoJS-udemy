let nome = 'João'; // STRING (sempre tem que estar dentro de aspas)
let nome2; // Declaramos a variável, mas não atribuímos nenhum valor a ela. Seu valor vai ficar como 'undefined' ao mandarmos exibir na tela (linha 11)
nome2 = 'José' // Inicializando a variável; O valor da variável pode ser alterado ao longo do código

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

console.log(nome2) // Resultado: José
nome2 = 'Otávio' // Nesse ponto do código, o valor da variável foi modificado para Otávio (LEMBRE-SE: variáveis PODEM VARIAR, podem ser MODIFICADAS)
console.log(nome2) // Resultado: Otávio


/*
===== REGRAS PARA A CRIAÇÃO DE VARIÁVEIS =====
- Não pode contar palavras reservadas pela linguagem (console, var, let, function, if);
- Variáveis precisam ter nomes significativos (variável nome para nome, variável idade para idade, etc.). Isso evita confusão no nosso código;
- Nome da variável não pode começar com número (let 1num, let 1nome, etc.);
- Nome da variável não pode conter espaços e traços (let nome cliente, let numero-inteiro). Nesse caso, podemos substituir o espaço e o traço pelo _ (underline);
- Utilizamos camelCase por convenção (a primeira letra minúscula e as próximas palavras começando com maiúscula) - Ex: let nomeCompleto = 'Luiz Otávio';
- Variáveis são case sensitive (letras maiúsculas e letras minúsculas fazem diferença) -> Ex: let nome é diferente de let Nome;
- Não podemos redeclarar variáveis com let, mas podemos modificar seu valor sem utilizar a palavra 'let' na hora de modificar. Exemplo logo abaixo:

let idade = 15
console.log(idade) -> Resultado: 15
let idade = 18
console.log(idade) -> Erro, pois redeclaramos a variável com let. Se quisermos modificar seu valor, utilizo apenas idade = <valoraqui>

Isso vai gerar um erro no nosso código.


--------------- NÃO UTILIZE VAR, UTILIZE LET SEMPRE ---------------

*/


