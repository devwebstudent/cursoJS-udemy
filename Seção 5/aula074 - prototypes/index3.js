// Quando temos métodos que fazem a mesma coisa para todos os objetos, posso tirar esse método e jogar dentro do __proto__
// Vamos jogar nosso método 'nomeCompleto()' dentro do __proto__
// Ao tentarmos acessar uma propriedade, o motor do JS vai primeiro tentar encontrar essa propriedade dentro do próprio objeto. Vai tentar encontrar a propriedade ou método dentro do próprio corpo do objeto.
// __proto__ é o link pro pai do objeto

// Agora melhoramos a performance do nosso programa, pois agora todos os objetos que criarmos não vão criar esse método, eles vão apenas usar essa referência do pai delas, que seria o protótipo usado para criar elas

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    // Esse aqui vai sobrescrever o do prototype
    // Vamos comentar o código abaixo. Sendo assim, ele vai executar o método do __proto__
    // this.nomeCompleto = () => 'Original: ' + this.nome + ' ' + this.sobrenome
}


// Pessoa.prototype === pessoa1.__proto__
Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

const pessoa1 = new Pessoa('Luiz', 'Otávio')

console.log(pessoa1)

console.log(pessoa1.nomeCompleto()) // Luiz Otávio