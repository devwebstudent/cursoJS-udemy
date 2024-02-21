/* Maneiras de declarar funções em JavaScript

- Arrow functions: é um recurso mais novo ES6. É uma declaraçào de função, mas não como declarar utilizando function.


Obs.: Todas as maneiras de declarar função, a função é tratada como um dado (objeto de primeira classe). Exemplo:

Quando passamos uma função como parâmetro, estamos tratando a função como um dado, pois estamos passando ela como parâmetro para outra função. Veja:

setInterval(function(), {
    
}, 1000)


*/


// Declaração de função utilizando arrow function:
const funcaoArrow = () => {
    console.log('Sou uma arrow function.')
}

funcaoArrow() // Executando nossa função. // Resultado: Sou uma arrow function.