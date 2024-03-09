// Filter é uma das funções mais importantes pra array dentro do JavaScript
// Filter vai filtrar o array, sem modificar o array original
// Filter sempre vai retornar um array com a mesma quantidade de elementos do array original ou menos, pois vamos filtrar esse array. Ex: se queremos números maior que 0, ele vai retornar todos os elementos do nosso exemplo; se queremos números maiores que 50, vai retornar apenas o 80


// Vamos criar outro array e receber os valores filtrados desse primeiro array
// Vamos pegar dentro do array numeros os nossos números filtrados
// O método filter vai receber uma função de callback e essa função de callback vai iterar sobre cada um dos elementos do primeiro array

// Retorne os números maiores que 10
//               0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]


// Fazendo da forma mais longa a função de callback (não muito comum de ser utilizada)
// Essa callback do filter vai receber automaticamente 3 coisas nos parâmetros dela:
// - valor -> cada um dos valores do array; ela vai iterar sobre o array, passando sobre cada elemento
// - indice -> o índice que está sendo iterado naquele momento
// - array -> também podemos receber ou utilizar o valor do array completo

// A função filter() requer que retornemos um booleano (true ou false)
// true se você quiser que esse elemento seja embutido no novo array, false se não quiser

// Os elementos que queremos embutir no novo array são os números maiores que 10. Todo elemento maior que 10 vamos retornar 'true'

function callbackFilter(valor) {
    // Quando temos uma função que retorna uma condição, nunca retorne true ou false, retorna a condição. A condição já vai retornar true ou false.
    // Quando a gente tem uma condição que está retornando um booleano pra uma condição, retorna a condição. A condição já vai avaliar em verdadeiro ou falso. Fazemos:
    
    return valor > 10; // Esse valor já vai retornar true ou false automaticamente.

}

// Passando a referência da função para o filter - não quero executar a função aqui, quero que minha função filter execute essa função
// Nosso array filtrado aqui
const numerosFiltrados = numeros.filter(callbackFilter);


// Ou seja, filter vai filtrar meus números, vai retornar os números que eu pedi quando retornei true
// Exibindo nosso array filtrado
console.log(numerosFiltrados) // Resultado: [ 50, 80, 11, 15, 22, 27 ]