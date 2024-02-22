// Funções dentro de outra funções pode se tornar extremamente complexo. Isso é útil em algumas situações. Exemplo onde isso seria útil:
// Função que retorna o número multiplicado por 2

function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}

console.log(duplica(2)) // 4
console.log(triplica(2)) // 6
console.log(quadriplica(2)) // 8


// Ver continuação no index6.js