// Em algum momento podemos querer que nosso objeto não seja alterado. 

// Object.freeze(objeto) -> previne que o objeto seja alterado; não é possível modificar propriedades, nem adicionar novas coisas dentro desse objeto.
// Funciona tanto com objeto, quanto com array.

// Só podemos manipular nosso objeto antes do 'Object.freeze'

// Fazemos assim:
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // O this representa o objeto vazio e é o objeto que vai ser retornado para a variável p1

    // Para travar qualquer objeto vindo desse construtor, fazemos:

    Object.freeze(this) // Desse modo, qualquer objeto vindo desse molde não pode ser alterado
}

const p1 = new Pessoa('Luiz', 'Miranda')
delete p1.nome // Não vai funcionar por conta do 'Object.freeze'


console.log(p1) // Pessoa { nome: 'Luiz', sobrenome: 'Miranda' }