// Agora vamos ver isso com as nossas Funções Construtoras, pois anteriormente estávamos vendo com objetos literais.

// Agora também sabemos que não precisamos criar métodos dentro dos Objetos, pois temos o prototype para fazer isso.

// É melhor colocarmos os métodos fora da sua função construtora, utilizando prototype

// No prototype do meu Produto temos um método que dá desconto

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}


// Vamos criar métodos dentro do prototype da função. Vamos criar um método de dar desconto. Essa função vai receber um parâmetro de quanto de desconto eu quero dar, como por exemplo 10%
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}


// Método que aumenta preço
Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 50)


// Imagine que temos um objeto produto 2 e quero reaproveitar esses métodos nesse objeto produto 2. Não vamos criar o produto 2 utilizando a função construtora, vamos criar ele de fora. 
// Nosso objeto produto 2 não possui os métodos aumento e desconto
// Reaproveitando os métodos de aumento e desconto no nosso produto 2.
// Vamos setar o prototype do produto 2 como sendo o prototype da função Produto

const p2 = {
    nome: 'Caneca',
    preco: 15
}

// Vamos setar o prototype do produto 2 como sendo o prototype da função Produto
Object.setPrototypeOf(p2, Produto.prototype)

p2.aumento(10) // aumentando preço do produto 2 em 10%
console.log(p1)
console.log(p2) // Resultado: Produto { nome: 'Caneca', preco: 16.5 }


// Note o jeito que o produto 2 foi exibido: tá mostrando que o construtor do meu objeto literal p2 é a minha função construtora Produto. Tá sendo exibido como se fosse um produto criado pela função construtora.