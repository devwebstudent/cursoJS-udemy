// Também podemos fazer desestruturação de array nos parâmetros

function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3); // Resultado: 15 20 25
}

funcao([15, 20, 25]);



// =====================



// Outro modo de fazer

function funcao2([valor4, valor5, valor6]) {
    console.log(valor4, valor5, valor6); // Resultado: 30 35 40
}

let numeros = [30, 35, 40]
funcao2(numeros);