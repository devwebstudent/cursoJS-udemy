// Outro exemplo: retorne as pessoas com mais de 50 anos

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const maioresDe50 = pessoas.filter(function(objeto) {
    // Vamos retornar as pessoas com idade maior que 50 anos de idade
    return objeto.idade > 50
})

console.log(maioresDe50) // [ { nome: 'Luiz', idade: 62 }, { nome: 'Eduardo', idade: 55 } ]

/* Resultado: 

[ 
{ nome: 'Luiz', idade: 62 }, 
{ nome: 'Eduardo', idade: 55 } 
]

*/