// Funções de callback = funções que são executadas quando uma ação ocorre; quando uma ação finaliza ela executa essa função de callback

// Criando função que gera números aleatórios entre 1000 e 3000 para o setTimeout()
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

console.log(rand())

// Feito isso, agora não sabemos qual dessas funções abaixo vai ser executada primeiro
// A única coisa que sabemos é que 'Olá mundo' será a primeira coisa que será executada, pois ele não tem um setTimeout()

function f1() {
    setTimeout(function () {
        console.log('f1')
    }, rand()) // Chamando nossa função que gera número aleatório
}

function f2() {
    setTimeout(function () {
        console.log('f2')
    }, rand())
}

function f3() {
    setTimeout(function () {
        console.log('f3')
    }, rand())
}


f1()
f2()
f3()
console.log('Olá mundo')