// Outra coisa que podemos fazer, que é similar ao 'arguments' que sustenta os argumentos da função
// No operador mando um operador (+, -, *, /);
// No acumulador mando um valor inicial pra fazer uma acumulação
// Posso mandar os números como rest operator. Todo resto que é depois do acumulador vai para o array numeros
// Feito isso, podemos fazer a funcionalidade da função

function conta(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros)

    // Quero os valores do array numeros
    for (let numero of numeros) {
        // Agora quero fazer meu acumulador acumular os valores: a cada volta do laço, vou somar cada um dos valores
        acumulador += numero
    }
    
    console.log(acumulador) // Vai dar a soma de todos os valores. // Resultado: 140
}

conta('+', 0, 20, 30, 40, 50)