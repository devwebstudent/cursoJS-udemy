// MAIS MODOS DE CRIAR FUNÇÕES

// Podemos jogar uma função dentro de uma variável, que é chamada de função anônima
// Abaixo, vamos ver uma função que vai ser para saber a raiz quadrada de um número

const raiz = function(n) {
    return n ** 0.5;
}; // Nesse caso, sempre que utilizamos o sinal de atribuição (=), precisamos terminar nossa expressão com ;

console.log(raiz(25));
console.log(raiz(81));
console.log(raiz(9));