// NÃO TERMINEI O PROJETO - CONTINUAR

let relogio = document.querySelector('#relogio')
let iniciar = document.querySelector('#iniciar')
let pausar = document.querySelector('#pausar')
let zerar = document.querySelector('#zerar')

function pegaHora(segundos) {
    let data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-br', {
        timeZone: 'gmt'
    })
}

let segundos = 0
let timer

function Iniciar() {
    timer = setInterval(() => {
    segundos++
    relogio.innerHTML = pegaHora(segundos)
}, 1000);
}

iniciar.addEventListener('click', function() {
    clearInterval(timer)
    Iniciar()
    relogio.style.color = 'lightblue'
})

pausar.addEventListener('click', function() {
    clearInterval(timer)
    relogio.style.color = 'red'    
})

zerar.addEventListener('click', function() {
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    relogio.style.color = 'black'
    segundos = 0
})