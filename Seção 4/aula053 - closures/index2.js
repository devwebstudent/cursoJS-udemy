// Se eu colocar a variável nome como parâmetro da função mãe
// Escopo léxico = a variável tem que relembrar dela e dos seus vizinhos no momento em que ela foi declarada

function retornaFuncao(nome) {    
    return function () {
        return nome
    }
}

// Temos uma função que no closure dela o nome vai ser Luiz e outra funçào que o closure dela o nome vai ser João
// O closure pode ser alterado de função para função
// Temos uma função anônima que tem acesso ao closure onde está a variável nome = 'Luiz'
// Temos outra função anônima que tem acesso ao closure onde está a variável nome = 'João'
const funcao1 = retornaFuncao('Luiz')
const funcao2 = retornaFuncao('João')

console.log(funcao1()) // Luiz
console.log(funcao2()) // João