// Note que estamos criando um objeto com const
// Como o valor da constante foi alterado?
// Na verdade não estou alterando o valor da variavel em si, estamos alterando o valor do valor da variável
// A variável aponta para um endereço de memória, que aponta pra um valor
// A variável na verdade é o endereço de memória onde está o valor
// A gente está apontando a variável para um endereço de memória e o JavaScript busca naquele endereço o valor

// p1 = (ENDEREÇO NA MEMÓRIA) -> 'valor'

// Constantes não podem apontar pra um novo endereço na memória
// Quando alteramos um valor, não estou alterando a referência da memória, estou alterando o valor em si. Ex:

// p1.nome = 'Outra coisa' -> estou alterando o valor em si

// O que não podemos fazer:
// p1 = 'Outra coisa' -> assim eu estaria alterando a referência de memória de p1, estou tentando alterar o próprio valor da variável


function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Luiz', 'Miranda')
// Nesse local estamos acessando um valor dentro dessa variável, por isso não dá erro
p1.nome = 'Outra coisa'

console.log(p1) // Pessoa { nome: 'Outra coisa', sobrenome: 'Miranda' }