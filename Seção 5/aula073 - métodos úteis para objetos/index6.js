// Object.defineProperty(objeto, 'propriedade', PropertyDescroptor (que é um objeto))

// Object.getOwnPropertyDescriptor(objeto, 'propriedade')
// Vai me retornar o descritor daquela propriedade dentro do objeto
// Vai me retornar o que a propriedade é (writable, configurable, enumerable, value)
// Vou pegar do objeto 'produto' o que a propriedade 'nome' é

const produto = {nome: 'Produto', preco: 1.80}
Object.defineProperty(produto, 'nome', {
    writable: false, // Aqui alteramos writable para false, o valor não pode mais ser alterado
    configurable: false
})

produto.nome = 'Outra coisa'
delete produto.nome
console.log(produto) // { nome: 'Produto', preco: 1.8 }
// o valor de nome não vai ser alterado, pois writable: false
// não podemos deletar, pois configurable: false

// Veja abaixo:

console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) // Vendo o que a propriedade nome é

/* Resultado: 

{
  value: 'Produto', // valor
  writable: false, // não podemos mais alterar seu valor
  enumerable: true, // vai ser exibido quando dermos console.log no objeto
  configurable: false // não podemos modificar essa propriedade
}

*/
