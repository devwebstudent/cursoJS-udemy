/* Outro exemplo: 

- Fist-class object
// Function expression (jogamos a função dentro de uma variável)


Funções são objetos de primeira classe: a gente quer falar que a função pode ser tratada como dado. Podemos passar ela para uma outra função, retornar ela de outra função, etc.
Assim como faço: */
const nome = 'Luiz';

// Posso também utilizar a expressão de função, que seria criar uma função como um dado, que seria eu criar uma variável e jogar uma função nessa variável.
// Veja abaixo que estamos jogando uma função como resultado de uma constante. Estou falando que uma constante recebe uma função como dado.
// No caso abaixo, a constante recebeu uma função, então agora posso executar essa constante como se fosse uma função normal.
const souUmDado = function() {
    console.log('Sou um dado.')
}

souUmDado() // -> Executando a constante como se fosse uma função normal.
// A minha variável recebeu uma função e ela passou a ser uma função. Por isso que posso tratar uma função como um dado em JS.
// Como jogamos uma função anônima dentro de uma variável, a variável se tornou uma função com nome que é o nome da própria variável.

// Agora posso jogar essa variável como parâmetro de outra função e fazer essa outra função executar a minha função. Exemplo:

function executaFuncao(funcao) { // Estou esperando receber uma função neste parâmetro
    console.log('Vou executar sua função abaixo.')
    funcao(); // E aqui dentro eu executo esse parâmetro, que é uma função
}

executaFuncao(souUmDado)