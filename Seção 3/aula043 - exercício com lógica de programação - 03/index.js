// NÃO ENTENDI PARTE DA SOLUÇÃO = REVER VÍDEO 62


// Escreva uma função que recebe um número e retorna o seguinte: 
// Número é divisível por 3 = Fizz
// Número é divivível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número não é divisível por 3 e 5 = retorna o próprio número
// Checar se o número é realmente um número - Se receber uma STRING no lugar do NÚMERO, retorna o que você recebeu
// Use a função com números de 0 a 100

function fizzBuzz(numero) {
    if (typeof (numero) !== 'number') return numero; // Se não for um numero, retornará a própria STRING
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'; // Essa condição deve ser checada primeiro, pois ela está checando 2 coisas.
    if (numero % 3 === 0) return 'Fizz'; // Checando se número é divisivel por 3
    if (numero % 5 === 0) return 'Buzz'; // Checando se número é divisível por 5
    return numero;
}

console.log(fizzBuzz('a'))

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}