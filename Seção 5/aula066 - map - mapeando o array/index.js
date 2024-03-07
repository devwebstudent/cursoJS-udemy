// map() é extretamente similar ao filter(), a única diferença é o retorno final
// filter() -> filtra o array e o que retorna é um array do mesmo tamanho ou menor (pois ele vai ser filtrado)

// map() vai sempre retornar um array do tamanho do array original
// map() quero mapear os valores originais para novos valores
// map() -> vamos receber um array do tamanho do original, mas alterados
// map() não vai mexer no array original, ela vai retornar um novo array
// map() usa os valores do array original e cria um novo array com valores alterados

//               0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// Dobre os números - convertido para arrow function
const numerosEmDobro = numeros.map((valor) => {
    return valor * 2;
})


// Vai retornar os números dobrados - vamos ter um novo array com o dobro dos valores do array original
console.log(numerosEmDobro) // [ 10, 100, 160,  2,  4,  6, 10,  16,  14, 22, 30, 44, 54]





// Na função filter() a gente retornava true pra quando queriamos adicionar aquele valor no novo array e false pra quando não queriamos adicionar aquele valor no novo array

// No map() a gente vai retornar o valor com um valor diferente