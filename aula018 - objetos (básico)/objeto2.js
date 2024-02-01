// Já vimos que podemos criar um objeto como podemos ver abaixo. Também podemos ter funções dentro do nosso objeto.
// OBS: Quando uma função está dentro de um objeto ela é chamada de método. 
// Abaixo vamos ter uma função que vai fazer a pessoa1 falar o seu nome e a sua idade.
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(pessoa1.nome, pessoa1.idade + ' anos')
    }
}
pessoa1.fala() // Para a pessoa1 executar a função de falar. Essa ação que está dentro do meu objeto pessoa1 será executada. // Resultado: Luiz 25 anos



// Dentro do objeto tenho a palavra this, onde posso referenciar esse objeto e qualquer atributo desse objeto dentro do método.
const pessoa2 = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 44,

    fala2() {
        console.log(`A minha idade atual é ${this.idade}`) // Este objeto nesse contexto; this representa este objeto - é o objeto em si
    },

    incrementaIdade() {
        ++this.idade; // this é o objeto e idade tem o valor de 44 - Estou pegando esse valor e somando +1
    }
}
pessoa2.fala2()
pessoa2.incrementaIdade()
pessoa2.fala2()
pessoa2.incrementaIdade()
pessoa2.fala2()
pessoa2.incrementaIdade()
pessoa2.fala2()