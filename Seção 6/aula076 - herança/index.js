// Camiseta, caneca
// Vamos criar nossos métodos no prototype do Produto
// Vamos especializar a função Produto: não quero reescrever aumento, desconto e não quero reescrever a função Produto, principalmente.

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

// Vamos criar uma função construtora para a camiseta
// Quero que o códido dentro da função Produto seja executado aqui
// Vamos utilizar um método que tem dentro de todas as funções, chamado de call()
// Dentro dele vamos passar o this dentro dessa função Camiseta. O this de Camiseta vai ser o objeto que eu criar utilizando essa função construtora Camiseta
// Vamos passar o this pra essa função Produto
// Depois vamos passar os argumentos que preciso nessa função construtora Camiseta
// Agora linkamos as 2 funções: a função Camiseta vai funcionar exatamente igual a Produto

// Camiseta vai herdar tudo que Produto tem, mas pode ter suas coisas específicas, que nesse caso é a cor
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    // Agora minha camiseta vai ter uma propriedade a mais que o produto original
    this.cor = cor
}

// Quero que a função Camiseta tenha o mesmo prototype da função Produto. A partir daí preciso poder modificar o prototype apenas de Camiseta, ou seja, se eu modificar alguma coisa dentro de Camiseta, não vai afetar Produto
// Sabemos que prototype é um objeto, que geralmente é um objeto vazio que vem pronto para você usar
// Vamos criar um objeto e vamos setar o prototype desse objeto vazio para o prototype do Produto

// Criando um objeto vazio e setando o prototype dele como Produto. O que vai acontecer no final das contas é que o prototype de Camiseta vai ser o mesmo de Produto
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta // Fazendo isso, agora o construtor de camiseta vai ser a função construtora Camiseta

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque
        },
        
        set: function(valor) {
            if(typeof valor !== 'number') return // Pra n deixar setar o valor se n for number
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca



// Vamos sobrescrever o aumento dentro do prototype apenas da Camiseta e colocar esse aumento em porcentagem
// Mudamos o comportamento do aumento dentro do prototype da Camiseta
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

// Sobrescrevendo o desconto da Caneca
Caneca.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

const produto = new Produto('Gen', 111)
const camiseta = new Camiseta('Regata', 7.5, 'Preta')
const caneca = new Caneca('Caneca', 13, 'Plástico', 5)

console.log(produto) // Produto { nome: 'Gen', preco: 111 }
console.log(camiseta) // Camiseta { nome: 'Regata', preco: 7.5, cor: 'Preta' }

caneca.estoque = 100
console.log(caneca) // Caneca {nome: 'Caneca', preco: 13, material: 'Plástico', estoque: 100}



// Note que aparece que o construtor do objeto camiseta passa a ser Produto, mas não é, pois criamos esse objeto com a função Camiseta