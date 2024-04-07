// Outra coisa que vimos: objetos podem conter métodos (funções dentro de objetos que executam ações)
// As vantagens das funções(métodos) estarem dentro do objeto é termos acesso às coisas do objeto dentro dessa função
// Com isso, podemos ter coisas dentro do meu objeto que manipulam os valores dentro do meu objeto

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 30;

pessoa1.falarNome = function() {
    return `${this.nome} está falando seu nome`
}

// Dentro desse método posso ter uma função que usa minha idade para pegar o ano de nascimento
pessoa1.getDataNascimento = function() {
    // Pegando o ano atual
    const dataAtual = new Date();
    let ano = dataAtual.getFullYear();
    return ano - this.idade // ano atual - idade da pessoa
}

// Precisamos dar console.log(), pois minhas funções estão retornando um valor

console.log(pessoa1.falarNome()) // Luiz está falando seu nome
console.log(pessoa1.getDataNascimento()) // 1994