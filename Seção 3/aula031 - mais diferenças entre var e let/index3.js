// HOISTING
// No JS acontece algo estranho com variáveis declaradas com VAR: Quando criamos variáveis com VAR o JS faz algo chamado elevação (hoisting), ele eleva a declaração da variável.
// Ele vai ler o código, vai detectar todos os locais onde você está criando sua variável com VAR, vai pegar essa variável e vai declarar essa variável no topo do arquivo pra você.
// Apenas a declaração da variável é levada ao topo do código, NÃO SEU VALOR. O valor continua no local onde a variável foi escrita.

// RESUMINDO: Apenas a declaração da variável é içada para o topo, não o valor. 


// NÃO OCORRE HOISTING COM LET! -> Se uso uma variável antes de declarar ela, vai me retornar um erro

var sobrenome;
console.log(sobrenome) // Resultado: undefined
sobrenome = 'Miranda'
console.log(sobrenome)




console.log(nome) // Retorna um erro, dizendo que não podemos acessar o valor da variável antes de sua inicialização.
let nome = 'Luiz'