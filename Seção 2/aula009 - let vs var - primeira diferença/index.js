var nome = 'Luiz';
var nome = 'Otávio'; // Podemos redeclarar variáveis com var
console.log(nome);

let num = 13
let num = 14 // Não podemos redeclarar variáveis com let - Isso vai gerar um erro ao mandarmos executar
console.log(num)

nome2 = 'Olá mundo' // Posso declarar variável sem utilizar let, var ou const - NÃO FAÇA ISSO!! -> Isso vai criar uma variável global no seu sistema geral e pode afetar outras variáveis do seu sistema
console.log(nome2)

/*
A primeira diferença entre VAR e LET é:

Com VAR -> posso redeclarar uma variável, como podemos ver nas linhas 1 e 2 do nosso código;
Com o LET -> não é possível redeclarar uma variável, como podemos ver nas linhas 5 e 6. Isso irá gerar um erro ao executarmos nosso código, dizendo que nosso LET já foi declarado.


O LET surgiu para corrigir esse problema de redeclararmos uma variável.
*/

/* IMPORTANTE!!!

NÃO CRIE VARIÁVEIS SEM LET OU CONST!!!!!!!!!!!!!!!! 

*/