// Simulando map() utilizando reduce()
// Não faça isso com reduce(), é só um exemplo

// Retorne um array com o dobro dos valores

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// É só adicionar no meu acumulador o valor * 2 -> acumulador.push(valor * 2)
const dobro = numeros.reduce(function (acumulador, valor) {
    acumulador.push(valor * 2)
    return acumulador
}, [])


// Vai retornar um array com cada um dos números dobrados

console.log(dobro)
// [10, 100, 160,  2,  4,  6,  10,  16,  14, 22, 30, 44,  54] 