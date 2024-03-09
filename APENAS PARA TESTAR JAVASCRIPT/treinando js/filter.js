// Filter
const numeros = [10, 13, 8, 3, 44, 77, 9, 14, 25, 38, 60]
const numerosPares = numeros.filter((valor) => {
    if (valor % 2 === 0) {return valor}
})
console.log(numerosPares)

const pessoas = [
    {nome: 'João', idade: 15}, 
    {nome: 'Carlos', idade: 20},
    {nome: 'Maria', idade: 44},
    {nome: 'Joana', idade: 25},
    {nome: 'Marcelo', idade: 37},
    {nome: 'Elizabeth', idade: 22}
]

const maioresDe18 = pessoas.filter((pessoa) => {
    return pessoa.idade > 30
})

console.log(maioresDe18)