// Fazendo um exemplo mais complexo: vamos filtrar coisas desses objetos
// Cada índice desse array é um objeto
// Lembrete: filter retorna um novo array filtrado, ele não mexe no array original

// Retorne pessoas com nome com 5 letras ou mais

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

// Temos que mandar uma função de callback e retornar true pros elementos que queremos incluir no novo array e false pros elementos que não vão ser incluídos no novo array
// Vamos precisar do valor
// Vamos retornar true pras pessoas cujo nome tem 5 letras ou mais
// Em cada elemento do array temos um objeto. Para acessar o nome, fazemos objeto.nome
const pessoasComNomeGrande = pessoas.filter(function(objeto) {
    // Checando se o nome da pessoa tem 5 letras ou mais
    // Vamos retornar as pessoas com 5 letras ou mais no nome
    return objeto.nome.length >= 5 // Estamos pegando o tamanho do nome da pessoa
})

console.log(pessoasComNomeGrande) // Temos um novo array filtrado com o nome de todas as pessoas com nome de 5 letras ou mais

/* Resultado: 

[
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]

*/