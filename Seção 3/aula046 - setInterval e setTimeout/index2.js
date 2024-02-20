// Ai você pergunta: precisamos criar esse tanto de função só para isso? Não precisamos. Para isso servem as funções anônimas do JS.

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