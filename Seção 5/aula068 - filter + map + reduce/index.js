// Unindo filter(), map() e reduce()
// Podemos fazer uma combinação de coisas e retornar um único valor

// Filtrar pares
// Dobrar os valores
// Reduzir (somar tudo)
// Retorne a soma do dobro de todos os pares

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]


// Abaixo vamos unir tudo em uma única variável
// Filtrando pares
// Vamos converter tudo para arrow function e simplificar o código

const numerosPares = numeros
    .filter(num => num % 2 === 0) // Filtrando pares
    .map(num => num * 2) // Dobrando valores pares
    .reduce((acum, valor) => acum + valor) // Somando o dobro dos valores pares



// após usar filter() - PARES ->                     [ 50, 80, 2, 8, 22 ]
// após usar map() - DOBRO DOS PARES ->              [ 100, 160, 4, 16, 44 ]
// após usar reduce() - SOMA DO DOBRO DOS PARES ->   324

console.log(numerosPares) // 324