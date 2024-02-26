// Funções imediatas (IIFE) - funções auto-invocadas (Immediately Invoked Function Expression)
// Quando estamos trabalhando no browser, não queremos que nossas variáveis e funções fiquem no escopo global
// E como fazemos para fugir do escopo global?
// Criamos uma função e jogamos tudo dentro dela

function qualquerCoisa() {
    console.log(112121212)
}

qualquerCoisa() // Chamando a função imediatamente após ela ter sido criada. Nossa função é executada imediatamente.