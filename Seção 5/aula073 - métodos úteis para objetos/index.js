// Objetos, assim como arrays, são valores passados por referência

// Como copiar um objeto para outro

// As 2 variáveis apontam pro mesmo endereço na memória. Se modifico um objeto, o outro também vai ser modificado. Eles apontam pro mesmo valor.
const produto = {nome: 'Caneca', preco: 1.80}
const outraCoisa = produto
produto.nome = 'Luiz Otávio' // Alterando o objeto produto, outraCoisa também vai ser alterado

console.log(produto) // { nome: 'Luiz Otávio', preco: 1.8 }
console.log(outraCoisa) // { nome: 'Luiz Otávio', preco: 1.8 }