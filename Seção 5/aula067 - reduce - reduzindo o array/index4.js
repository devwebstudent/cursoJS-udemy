// Se quero somar só os pares com reduce()

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce(function(acumulador, valor) {
    if (valor % 2 === 0) {
        console.log(acumulador, valor)
        
        acumulador += valor
        
    }
    return acumulador
}, 0) // Nesse caso, temos que mandar um valor inicial de 0, se não ele vai somar o primeiro elemento, que é um 5, que é ímpar e a conta vai dar errada

console.log(total) // 162