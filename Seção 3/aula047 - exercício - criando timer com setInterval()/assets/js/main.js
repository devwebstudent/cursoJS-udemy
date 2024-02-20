function relogio() {

    // A única função desta função é receber os segundos, criar a hora e retornar uma hora desses segundos
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000) // 1000ms = 1s
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'GMT' // Nesse timezone a data que estamos passando é 01/01/1970 às 0h, 0m, e os segundos que estou mandando
        })
    }

    const relogio = document.querySelector('.relogio')
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')
    let segundos = 0; // Essa variável mantém os segundos
    let timer;


    // Assim que eu clicar no iniciar, preciso de uma função que inicie o meu relógio. Abaixo:
    function iniciaRelogio() {
        // A cada 1 segundo, vou somar 1 segundo na variável segundos
        timer = setInterval(function () {
            segundos++;

            // Também quero que essa função atualize o innerHTML do meu relógio pra adicionar hora no meu relógio.
            relogio.innerHTML = criaHoraDosSegundos(segundos)
        }, 1000)
    }


    // Com um clique estamos capturando todos os eventos
    document.addEventListener('click', function (e) {
        // O e.target vai me mostrar qual elemento está sendo clicado na página
        const el = e.target;
        console.log(el)

        if (el.classList.contains('zerar')) { // Se existe a classe zerar no elemento que estou clicando

            clearInterval(timer); // Quando clicamos no zerar, ele limpa o timer e coloca 00:00:00
            relogio.innerHTML = '00:00:00';

            // Um problema que vamos ter é que se eu zerar e clicar em iniciar, ele vai voltar pros segundos que ele tava antes. Para resolver isso, ao clicar em zerar, quero meus segundos com valor 0 de novo:
            segundos = 0;
            relogio.classList.remove('pausado')
        }

        if (el.classList.contains('iniciar')) { // Se existe a classe iniciar no elemento que estou clicando
            // Quando eu clicar em iniciar tenho que garantir que não tenha nenhum timer rodando:
            clearInterval(timer);
            iniciaRelogio();
            relogio.classList.remove('pausado') // Para remover a classe pausado quando clicarmos no iniciar.

        }

        if (el.classList.contains('pausar')) { // Se existe a classe pausar no elemento que estou clicando

            clearInterval(timer); // Quando eu clicar no pausar, vamos pausar nosso timer.
            relogio.classList.add('pausado') // Para adicionar a classe pausado quando pausarmos
        }

    })

}

relogio();



/*

// Em vez de fazermos dessa maneira, adicionando eventListernet para cada botão, faremos da maneira acima

// Pegando click dos botões
iniciar.addEventListener('click', function(event) {
    // Quando eu clicar em iniciar tenho que garantir que não tenha nenhum timer rodando:
    clearInterval(timer);
    iniciaRelogio();
    relogio.classList.remove('pausado') // Para remover a classe pausado quando clicarmos no iniciar.
}) 

pausar.addEventListener('click', function(evento) {
    clearInterval(timer); // Quando eu clicar no pausar, vamos pausar nosso timer.
    relogio.classList.add('pausado') // Para adicionar a classe pausado quando pausarmos
})

zerar.addEventListener('click', function(evento) {
    clearInterval(timer); // Quando clicamos no zerar, ele limpa o timer e coloca 00:00:00
    relogio.innerHTML = '00:00:00';
    
    // Um problema que vamos ter é que se eu zerar e clicar em iniciar, ele vai voltar pros segundos que ele tava antes. Para resolver isso, ao clicar em zerar, quero meus segundos com valor 0 de novo:
    segundos = 0;
})



*/







/* Para pausar o timer :
Criamos uma variável timer fora da função sem inicializar ela;
Dentro da função fazemos a função iniciaRelogio() atualizar o valor da variável timer


*/