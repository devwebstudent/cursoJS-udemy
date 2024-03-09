// Convertendo exemplo anterior para arrow function

// Retorne pessoas com nome com 5 letras ou mais
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const pessoasComNomeGrande = pessoas.filter(objeto => objeto.nome.length >= 5) // // Estamos pegando o tamanho do nome da pessoa

console.log(pessoasComNomeGrande) 

/* Resultado: 

[
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]

*/