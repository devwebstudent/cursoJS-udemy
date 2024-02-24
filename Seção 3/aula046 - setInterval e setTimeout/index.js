// Vamos ver 2 funções que servem para controlar timers
// Quando quero trabalhar com intervalo de tempo, uso a função setInterval()

function mostraHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

function funcaoDoIntervalo() {
    console.log(mostraHora())
}

// setInterval() executa repetidamente uma função
// Vamos passar uma referência no primeiro parâmetro pra função que eu quero que seja executada de tempos em tempos. No caso, queremos que funcaoDoIntervalo() seja executada pelo setInterval().
// Ao invés de eu executar a função aqui, só passo a referência (passar referência = chamar a função sem executar ela utilizando parenteses)
// O segundo parâmetro passamos de quanto em quanto tempo eu quero que isso seja executado.
// 1000 ms = 1 segundo

setInterval(funcaoDoIntervalo, 1000) 

// A função será executada de 1 em 1 segundo