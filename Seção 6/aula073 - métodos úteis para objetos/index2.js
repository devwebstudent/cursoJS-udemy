// Fazendo o objeto produto ser copiado para dentro de caneca
// Também podemos criar métodos e propriedades nesse objeto copiado
// Vamos utilizar spread operator (...)

const produto = {nome: 'Produto', preco: 1.80}
const caneca = {...produto, 
    material: 'Porcelana'} // Espalhando o objeto produto dentro de caneca. Também podemos criar propriedades nesse objeto.


// Alterando as propriedades nome e preco do objetoo caneca
caneca.nome = 'Outro nome'
caneca.preco = 2.5


// Note que agora os 2 estão diferentes, eles não estão mais apontando pro mesmo lugar na memória
console.log(produto) // { nome: 'Produto', preco: 1.8 }
console.log(caneca) // { nome: 'Outro nome', preco: 2.5, material: 'Porcelana' }