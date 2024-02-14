// Escreva uma função que recebe 2 números e retorne o maior deles

function maiorNumero(num1=0, num2=0) {
    return Math.max(num1, num2)
}

let maiorNum = maiorNumero(500, 600)
console.log(maiorNum); // Resultado: 600



// Fazendo de outro modo - operador ternário
function maior(x, y) {
    return x > y ? x : y;
}

console.log(maior(150, 30)); // Resultado: 150



// Fazendo com arrow function -> Se temos apenas uma linha na arrow function, podemos eliminar as chaves. Também quando ela tem só 1 linha, fica implícito que o que está nessa linha é o return, e podemos eliminar tb.
const max = (x, y) => x > y ? x : y;
console.log(max(10, 50)); // Resultado: 50