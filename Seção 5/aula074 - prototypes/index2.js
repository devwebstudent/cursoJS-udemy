// Separamos o Objeto Date e vamos ver como ele é por dentro
// Note que ao darmos console.log() não aparece nenhum método ou propriedade
// Como consigo fazer data.getFullYear(), sendo que não tem nada dentro desse objeto?
// A gente tem a propriedade __proto__ que não está dentro do objeto, ela está no pai desse objeto. Todos os objetos vão utilizar essa propriedade, que é uma propriedade só, que está em um local só e não vai ser criada para todos os objetos.

// Dentro do __proto__ do Date, temos vários métodos: getDate, getFullYear, etc.

// Mas de onde vem o __proto__?
// Toda vez que criamos um objeto vindo de uma função construtora, o JS já linka pra você uma propriedade da função construtora que chama prototype. Essa propriedade é um objeto.

// Prototype é um objeto que já está atrelado automaticamente a essa função. O que temos que fazer é só usar ele.
// Sempre que eu usar o prototype da minha função construtora, todos os objetos que vem da minha função construtora também vão ter essas coisas que vou criar.


function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
}

const pessoa1 = new Pessoa('Luiz', 'Otávio')
const pessoa2 = new Pessoa('Maria', 'Oliveira')


// Ao colocarmos o ponto depois do prototype, vou criar alguma coisa dentro do prototype da Pessoa
Pessoa.prototype.estouAqui = 'Hahaha'

console.log(pessoa1) // Não tem nada do 'estouAqui'dentro do meu objeto pessoa1.
console.log(pessoa2)


// Mas ao fazermos:
console.log(pessoa1.estouAqui) // Resultado: Hahaha
console.log(pessoa2.estouAqui) // Hahaha


// O 'estouAqui' está dentro do meu __proto__
// Relembrando: O __proto__ é o meu Pessoa.prototype. Ele só está linkado dentro do nosso objeto pessoa1.
//

// Ao fazermos Pessoa.prototype === pessoa1.__proto__ -> true
console.log(Pessoa.prototype === pessoa1.__proto__) // true

// Se criarmos mais objetos a partir dessa função construtora Pessoa, também terão o prototype linkado.

