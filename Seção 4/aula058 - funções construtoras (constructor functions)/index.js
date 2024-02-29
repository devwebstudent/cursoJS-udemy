// Função construtora -> retorna objetos
// Função fábrica -> também retorna objetos

// Função construtora:
// - sempre precisamos iniciar o seu nome com letra maiúscula; Ex: Pessoa
// - a função construtora começa com letra maiúscula para não esquerçermos de utilizar a palavra new
// - precisamos OBRIGATORIAMENTE utilizar a palavra new; Ex: quando vamos criar uma pessoa, fazemos let pessoa = new Pessoa, ou seja, cria uma nova pessoa
// - como sei que é uma função construtora, o corpo dessa função já é o objeto que vai ser criado. O JS faz isso automaticamente
// - não utilizo as vírgulas, utilizo a sintaxe normal do Javascript




// Para criar novos objetos vindos desse molde, utilizo a palavra 'new'
// Função construtora - criando pessoa que tenha nome e sobrenome. É como se fosse um molde para criar Pessoa

// Abaixo, o this se referindo a Pessoa que está sendo criada; Estamos criando o atributo nome no objeto Pessoa; seria a mesma coisa que fazermos Pessoa.nome = nome
// this.nome e this.sobrenome vao receber o valor do nome e sobrenome que vem no parâmetro

function Pessoa(nome, sobrenome) {
    this.nome = nome 
    this.sobrenome = sobrenome
    this.metodo = function() {
        console.log(`${this.nome}: sou um método.`)
    }
}


// new criando objeto vazio e fazendo o this apontar para esse objeto e retorna o objeto para essa variável
// a gente não precisa colocar return, pois o objeto já vai retornar automaticamente para a variável
// O new faz o this apontar para a pessoa que chamou
const p1 = new Pessoa('Luiz', 'Otávio') // Aqui o this vai ser p1
const p2 = new Pessoa('Maria', 'Oliveira') // Aqui o this vai ser p2

console.log(p1) // Pessoa {nome: 'Luiz', sobrenome: 'Otávio', metodo: [Function (anonymous)]}
console.log(p2) // Pessoa {nome: 'Maria', sobrenome: 'Oliveira', metodo: [Function (anonymous)]}

p1.metodo() // Luiz: sou um método.
p2.metodo() // Maria: sou um método.
