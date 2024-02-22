// Também podemos fazer atribuição via desestruturação nos parâmetros

function funcao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade); // Resultado: Luiz Otávio 30
}

funcao({ nome: 'Luiz', sobrenome: 'Otávio', idade: 30 }) // Enviando um objeto literal como argumento para a função e nos parâmetros estamos fazendo a desestruturação e retirando as variáveis nome, sobrenome e idade



// =====================================



// Outro modo de fazer

function funcao2({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade); // Resultado: João Paulo 35
}

let pessoa = {
    nome: 'João',
    sobrenome: 'Paulo',
    idade: 35
};

funcao2(pessoa)