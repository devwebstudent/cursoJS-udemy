// Object.keys() -> mostra as propriedades do objeto; retorna dentro de um array
// Objetc.freeze() -> congela o objeto, de modo que ele não possa ser modificado


const produto = {nome: 'Produto', preco: 1.80}

Object.freeze(produto) // Não podemos mais alterar o objeto produto

produto.nome = 'Outro nome' // Não vai funcionar, pois o objeto produto não pode ser alterado

console.log(produto) // { nome: 'Produto', preco: 1.8 } -> vai continuar com o mesmo nome original, ele não pode ser modificado, pois utilizamos Object.freeze

console.log(Object.keys(produto)) // [ 'nome', 'preco' ]