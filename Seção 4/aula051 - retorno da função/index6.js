// Vimos o código anterior bem repetitivo
// Imagina que temos 10 funções que tem que fazer aquele serviço

function criaMultiplicador(multiplicador) { // Aqui temos uma função que já cria e já retorna uma outra função
    // multiplicador está nesse escopo da função externa
    return function (n) {
        return n * multiplicador
    }

}

// Quando crio essa função duplica, estou passando um multiplicador para a função criaMultiplicador() e a função interna usa esse multiplicador
const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))