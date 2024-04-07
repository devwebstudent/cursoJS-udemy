function Produto(nome, preco, estoque) {
    this.nome = nome; // Variável púlbica, podemos acessar de fora do objeto
    this.preco = preco; // Variável pública    
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,        
        writable: true, // aqui posso alterar o valor da propriedade (writable: true)
        configurable: false // não posso reconfigurar a propriedade
    })

}

const p1 = new Produto('Camiseta', 20, 3)

p1.estoque = 5000

delete p1.estoque // propriedade estoque não vai ser deletada, pois configurable: false

console.log(p1) // Produto { nome: 'Camiseta', preco: 20, estoque: 5000 }


// Object.keys(p1) -> para ver as chaves(propriedades) do meu objeto
// Vai retornar as propriedades dentro de um array
// Se enumerable: false, estoque não seria exibido

console.log(Object.keys(p1)) // [ 'nome', 'preco', 'estoque' ]


// Iterando as chaves do objeto - vai ser similar ao Object.keys(p1)
for (let chave in p1) {
    console.log(chave) // Resultado: nome, preco, estoque
}