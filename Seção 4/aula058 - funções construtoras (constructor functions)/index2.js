// Também podemos criar atributos privados utilizando factory function ou função construtora
// Dentro da função posso criar coisas que não quero que estejam disponíveis nos objetos; Ex: um ID da pessoa

function Pessoa(nome, sobrenome) {

    // O ID só vai estar disponível dentro dessa função. Ela não vai estar disponível lá fora através da notação de ponto.
    
    // Atributos e métodos privados, pq não estão disponíveis fora do corpo do objeto
    const ID = 123456;
    const metodoInterno = function () {

    }

    // Atributos e métodos públicos, pois conseguimos acessar fora da função utilizando a notação de ponto
    this.nome = nome
    this.sobrenome = sobrenome
    this.metodo = function () {
        console.log(`${this.nome}: sou um método.`)
    }
}

const pessoa1 = new Pessoa('Luiz', 'Otávio')
const pessoa2 = new Pessoa('Maria', 'Oliveira') 