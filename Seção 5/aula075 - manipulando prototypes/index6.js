// Posso já criar o objeto e já setar o prototype dele de cara
// Vamos criar o produto 3

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Método de desconto do preço
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

// Método de aumento do preço
Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 50)

// Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
}

// Reaproveitando os métodos de aumento e desconto no nosso produto 2.
// Setando o prototype do produto 2 como sendo o prototype da função Produto
Object.setPrototypeOf(p2, Object.prototype)



// Criando o produto 3 e já setando seu prototype
// A função Object.create() pode receber algumas coisas:
// - pode receber o objeto literal -> Object.protoype; vai criar um objeto vazio

// O primeiro parâmetro é quem vai ser o prototype do objeto (o pai do objeto que estou criando)
// Aqui quem vai criar esse objeto produto 3 é nossa função construtora Produto
// O problema é que não vamos ter as propriedades ainda, então precisamos criá-las

// Outra coisa que podemos fazer é já setar as propriedades do produto 3 aqui (opcional)
// Vamos mandar um objeto no segundo parâmetro e configurar alguma propriedade

// Veja que estamos criando as chaves(propriedades) no objeto produto 3 e suas respectivas configurações. Esse segundo parâmetro é opcional.

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true, 
        enumerable: true,
        value: 100
    }, 

    tamanho: {
        writable: true,
        configurable: true, 
        enumerable: true,
        value: 42
     }
})

p3.aumento(10) // aumentando preço do produto 3 em 10%
console.log(p3) // Resultado: Produto { preco: 110, tamanho: 42 }