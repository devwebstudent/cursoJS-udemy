// Retorne os números maiores que 10
//               0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]


// Mostrando como funciona essa função de callback: ela percorre cada elemento do array
const numerosFiltrados = numeros.filter((valor, indice, array) => {
    // Vai mostrar todos os valores do nosso array, como se fosse um for. Ele vai percorrer item por item do meu array. A cada iteração do laço, temos um valor.
    console.log(valor) // 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27
    
    // console.log(indice) // 0 1 2 3 4 5 6 7 8 9 10 11 12
    
    // Ele também pode mandar o array completo a cada iteração, caso precise
    // console.log(array) 
    return valor > 10;
});
console.log(numerosFiltrados) // Resultado: [ 50, 80, 11, 15, 22, 27 ]