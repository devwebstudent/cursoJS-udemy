// Apenas para testar: filtrando apenas números maiores que 10
const numeros = [13, 7, 48, 22, 5, 11, 3, 72, 9]

const filtrados = numeros.filter(function(numero) {
    return numero > 10
})

console.log(filtrados) // [ 13, 48, 22, 11, 72 ]



// Filtrando pessoas com sobrenome Silva
const pessoas = [
    {nome: 'Carlos', sobrenome: 'Oliveira'},
    {nome: 'João', sobrenome: 'Silva'},
    {nome: 'Marcelo', sobrenome: 'Braz'},
    {nome: 'Letícia', sobrenome: 'Soares'},
    {nome: 'Moacyr', sobrenome: 'Silva'},
    {nome: 'Joana', sobrenome: 'Brito'},
    {nome: 'Jéssica', sobrenome: 'Andrade'},
    {nome: 'Maria', sobrenome: 'Silva'}    
]

const filtraPessoasComSilva = pessoas.filter(function(objeto) {
    return objeto.sobrenome === 'Silva'
})

console.log(filtraPessoasComSilva) // [{nome: 'João', sobrenome: 'Silva'}, {nome: 'Moacyr', sobrenome: 'Silva'}, {nome: 'Maria', sobrenome: 'Silva'}]