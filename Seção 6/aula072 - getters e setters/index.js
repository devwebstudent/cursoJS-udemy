// Getters e Setters são maneiras de proteger propriedades

// Getter -> faz o método do objeto simular que ele é uma propriedade;
// Getter -> para obter o valor
// Geralmente o trabalho do Getter é pegar o valor que tá ali no momento e exibir ele, só mostrar esse valor


// Setter -> para setar o valor, configurar esse valor
// Diferente do getter, o setter não vai me retornar nada, ele vai só modificar o valor ali dentro e é no setter que vou validar esse valor

// Vamos eliminar as propriedades value e writable do defineProperty
// Não vou precisar de value pois vou utilizar getter e setter para trabalhar no valor
// Não faz sentido ter writable se teremos um método que vamos trabalhar no meu valor
// Deveria checar se esse valor que está sendo atribuído é um número. Caso não seja, poderíamos, por exemplo, lançar um erro, etc. Fazemos isso utilizando Getters e Setters


// Imagina que em estoque só posso receber números
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configurável

        // Definindo Getter (para obter o valor). Fazemos: get: método, que no caso é uma função anônima pra obter o valor.
        get: function () {
            return estoquePrivado; // Para obter o valor, retornamos o estoque
        },

        // Definindo Setter (para modificar o valor). Também vamos validar e ver se esse valor é um número.
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Valor inválido') // Lançando um erro caso não seja number

            }
            estoquePrivado = valor // Resultado: O valor que eu quero
        }

    })
}

const p1 = new Produto('Camiseta', 20, 3)

p1.estoque = 500 // Esse valor vai ser passado pro parâmetro da função do setter

console.log(p1.estoque) // Pra ver o real valor do estoque // Resultado: 500