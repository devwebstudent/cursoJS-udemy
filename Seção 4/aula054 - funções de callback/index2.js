// Resolvendo o problema do 'Olá mundo' estar sendo executado primeiro
// Preciso que as funções abaixo sejam executadas na ordem
// O que podemos fazer é receber um parâmetro, que esse parâmetro vai ser uma função de callback
// Callback é uma função que pode ou não ser recebida nos parâmetros
// Preciso que essas funções sejam executadas na ordem
// Se eu precisar executar alguma coisa depois de executar f1, eu vou executar o callback



function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

function f1(callback) {
    setTimeout(function () {
        console.log('f1')
        if (callback) callback(); // Eu preciso checar se callback existe. Se existir algum callback no parâmetro, se alguma função de callback for recebida, executo esse callback.
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



// Preciso que a função f2 seja executada logo depois de f1. O que posso fazer é mandar uma função de callback aqui
// Eu enviando essa função, o que vou fazer é chamar dentro do f1 a função f2
// Logo após terminar a execução do f1, f2 vai ser executado, pq minha função de callback vai ser executada logo após o console.log('f1')
// Dentro do f2 fazemos a mesma coisa, chamando a função f3
// Também preciso de uma função de callback para executar o 'Olá mundo'

f1(function() { // Essa função de callback vai cair lá no parâmetro de f1, então a função vai ser executada logo após do console.log('f1')
    f2(function() {
        f3(function() {
            console.log('Olá mundo')
        })
    })
})

// Agora criamos a ordem: f2 nunca vai ser executada antes do f1, f3 nunca vai ser executada antes de f2, etc.