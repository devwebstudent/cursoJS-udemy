// Closures: está relacionado ao escopo léxico da função
// O closure é a habilidade que a função tem de acessar seu escopo léxico
// A função tem a habilidade de acessar o escopo léxico: que é o escopo dela mesma, escopo da mãe e escopo global
// Exemplo: vamos criar 2 funções - vamos criar uma função que retorna outra função

// No escopo léxico dessa função temos a variável nome. Vimos antes que podemos retornar uma função que tenha acesso ao escopo da função mãe dela.
function retornaFuncao() {
    const nome = 'Luiz'
    return function() { // -> essa função tem acesso ao escopo da função mãe (closure), que está em volta dela. No caso, essa função tem acesso a variável 'nome'.
        return nome
    }
}

const funcao = retornaFuncao() // Se eu chamo retornaFuncao(), essa variável vai receber uma função anônima como retorno
console.dir(funcao) // Ao mandarmos exibir essa variável que está recebendo a função anônima, ela vai executar essa função e retornar o valor de nome. // Resultado: Luiz

// Essa função anônima tem acesso a 3 escopos:
// - Escopo dela
// - Escopo da mãe dela (closure)
// - Escopo global