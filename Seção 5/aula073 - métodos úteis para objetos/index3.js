// Outra maneira de copiar objetos - Object.assign({destino}, objetoQueQueroCopiar)
// Abaixo vamos copiar para um objeto vazio(destino), e o objeto que quero copiar é o objeto produto. Também adicionamos a propriedade 'material'

const produto = {nome: 'Produto', preco: 1.80}
const caneca = Object.assign({}, produto, {material: 'Porcelana'}) // Copiando tudo dentro de produto para caneca

caneca.nome = 'Outro nome'
caneca.preco = 2.5
console.log(produto) // { nome: 'Produto', preco: 1.8 }
console.log(caneca) // { nome: 'Outro nome', preco: 2.5, material: 'Porcelana' }