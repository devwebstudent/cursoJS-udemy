// Vamos usar outra função que é muito similar ao setInterval(), só que ela não é um intervalo, ela executa só uma vez.
// setTimeout() -> executa só uma vez

function mostraHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

// Podemos jogar o setInterval() dentro de uma variável
const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000)

// setTimeout() -> executa só uma vez. Utilizei essa função pra parar a execução do nosso setInterval()
setTimeout(function() {
    clearInterval(timer); // Passo o nome do intervalo que quero parar
}, 3000); // Ele vai parar daqui a 3 segundos


// Posso também utilizar o setTimeout() para fazer outras coisas, como exibir uma mensagem na tela.
setTimeout(function() {
    console.log('Olá mundo')
}, 5000);