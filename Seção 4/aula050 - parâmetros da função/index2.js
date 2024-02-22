// Podemos por exemplo criar uma função que tivesse o trabalho de somar todos os valores recebidos
// Podemos fazer um for desses argumentos

function funcao() {
    let total = 0
    for (let argumento of arguments) {
        total += argumento // Total está valendo 0 recebe ele mesmo + o valor do argumento        
    }
    
    console.log(total)  // Soma de todos os argumentos // Resultado: 28    
}

funcao(1, 2, 3, 4, 5, 6, 7)