// O que quero é saber qual é o operador para saber qual conta deve ser feita
// O rest operator sempre deve ser o último parâmetro

const conta = function(operador, acumulador, ...numeros) {
    // Quero os valores do array numeros
    for (let numero of numeros) {
        if (operador === '+') {acumulador += numero}
        if (operador === '-') {acumulador -= numero}
        if (operador === '*') {acumulador *= numero}
        if (operador === '/') {acumulador /= numero}
    
}

console.log(acumulador)

};

conta('+', 0, 20, 30, 40, 50)