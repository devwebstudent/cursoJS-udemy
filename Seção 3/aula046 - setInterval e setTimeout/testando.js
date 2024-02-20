function horaAgora() {
    let hora = new Date();
    return hora.toLocaleTimeString('pt-BR')
}

// Executando nossa função a cada 1 segundo (em milisegundos)
let horario = setInterval(function() {
    console.log(horaAgora())
}, 1000)


// Parando execução da nossa função depois de 10 segundos (em milisegundos)
setTimeout(function() {
    clearInterval(horario)
}, 10000)