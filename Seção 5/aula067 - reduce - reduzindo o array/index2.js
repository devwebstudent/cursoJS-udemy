// Este é só um exemplo, não faça isso com reduce(). Estamos apenas simulando filter() utilizando reduce()
// Eu posso fazer isso facilmente com filter()

// Retorne um array com os pares

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// Valor tem o valor de cada elemento do array
// Se o resto da divisão do valor/2 é 0, quer dizer que o número é par
const pares = numeros.reduce(function (acumulador, valor) {

    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, []) 
// Acumulador é um arrau vazio no início e vamos adicionando os números pares nele a cada iteraçào


// Vai retornar um array só com os números pares

console.log(pares) // [ 50, 80, 2, 8, 22 ]