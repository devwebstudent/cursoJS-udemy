// Prototypes -> servem para passar propriedades e métodos de um objeto para outro.

// Função Construtora -> molde para criar novos objetos
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`

}

// Instância - ação de criar novos objetos. Estamos criando uma instância dessa função construtora. Abaixo estão objetos que vem dessa função.
const pessoa1 = new Pessoa('Luiz', 'Otávio')
const pessoa2 = new Pessoa('Maria', 'Oliveira')

console.log(pessoa1)
console.log(pessoa2)


/*
Explicação: O método nomeCompleto() está dentro da Pessoa. Toda pessoa que eu criar com essa função construtora vai ter tudo que tiver dentro da função construtora: nome, sobrenome, nome completo, etc.




*/