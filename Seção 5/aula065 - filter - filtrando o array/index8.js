// Outro exemplo: retorne pessoas cujo nome termine em 'a'

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const nomesTerminadosComA = pessoas.filter((objeto) => {
    // objeto.nome é o valor da propriedade nome, cujo valor é uma string
    // para garantir que o nome esteja todo em letra minúscula, colocamos toLowerCase()
    // por fim colocamos endsWith('a'), ou seja, pega todos os nomes terminados em 'a'
    return objeto.nome.toLowerCase().endsWith('a')
})

console.log(nomesTerminadosComA) 

/* Resultado: 
[ 
{ nome: 'Maria', idade: 23 }, 
{ nome: 'Letícia', dade: 19 }, 
{ nome: 'Rosana', idade: 32 } 
]

*/