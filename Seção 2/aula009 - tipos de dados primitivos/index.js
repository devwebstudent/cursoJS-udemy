// TIPOS DE DADOS PRIMITIVOS: STRING, NUMBER, UNDEFINED, NULL, BOOLEAN, SYMBOL (não vamos ver nessa aula, só mais pra frente)

// STRING: cadeia de caracteres; posso ter tanto com aspas simples, quanto com aspas duplas ou com crase.
const nome = 'Luiz';
const nome1 = "Luiz";
const nome2 = `Luiz`;

// NUMBER: um número normal; O JavaScript não diferencia números inteiros e números com ponto flutuante, são todos do mesmo tipo (NUMBER).
const num1 = 10;
const num2 = 10.52;

// UNDEFINED: Indefinido; a variável recebe esse valor automaticamente quando apenas declaramos ela, sem atribuir nenhum valor. Não aponta pra lugar nenhum na memória.
// Nunca vou criar uma variável e configurar o valor dela para undefined. Quem faz isso é o JavaScript automaticamente quando nào definimos um valor para a variável.
let nomeAluno; // undefined

// NULL: Nulo -> também não aponta pra lugar nenhum na memória
// Utilizamos quando queremos desconfigurar uma variável, quando queremos colocar o valor da variável como nulo; Eu explicitamente digo que eu não quero que essa variável aponte pra lugar nenhum na memória.
const sobrenomeAluno = null;

// BOOLEAN: só tem 2 possibilidades de valor: TRUE ou FALSE
// Exemplo de uso do boolean: utilizamos quando só temos 2 possibilidades de valores, como no caso de um aluno estar APROVADO ou não.
// Utilizamos BOOLEAN quando queremos mudar o fluxo da nossa aplicação, fazendo algum Desvio Condicional.
const aprovado = true; // Aluno aprovado

console.log(typeof aprovado, aprovado) // Para mostrar o TIPO e o VALOR de determinada variável. // Resultado: boolean true