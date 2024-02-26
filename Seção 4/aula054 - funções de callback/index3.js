// Podemos melhorar nosso código das funções de callback lá em baixo
// Funções de callback = coisas que você chama quando alguma coisa terminar de ocorrer

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

function f1(callback) {
    setTimeout(function () {
        console.log('f1')
        if (callback) callback();
    }, rand())
}

function f2(callback) {
    setTimeout(function () {
        console.log('f2')
        if (callback) callback();
    }, rand())
}

function f3(callback) {
    setTimeout(function () {
        console.log('f3')
        if (callback) callback();
    }, rand())
}


// Esse código faz a mesma coisa que o código anterior. A única coisa que estamos fazendo diferente é não usando as funções anônimas dentro do parâmetro, se não estariamos criando uma 'árvore de natal' que vai ficar uma dentro da outra

f1(f1Callback)

function f1Callback() {
    f2(f2Callback)
}

function f2Callback() {
    f3(f3Callback)
}

function f3Callback() {
    console.log('Olá mundo')
}