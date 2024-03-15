// Outra coisa que podemos fazer é criar um objeto e pegar só as propriedades que eu quero.
// Essa é a pior forma possível e a mais trabalhosa

const produto = {nome: 'Produto', preco: 1.80}
const caneca = {nome: produto.nome, preco: produto.preco}

caneca.nome = 'Outro nome'
caneca.preco = 2.5
console.log(produto) // { nome: 'Produto', preco: 1.8 }
console.log(caneca) // { nome: 'Outro nome', preco: 2.5 }