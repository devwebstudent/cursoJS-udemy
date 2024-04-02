// Estrutura condicional Switch
// Suponha que quero pegar o dia da semana

const data = new Date();
let diaSemana = data.getDay() // Para pegarmos o dia da SEMANA. Caso queiramos pegar o dia do mês, utilizar getDate().
console.log(diaSemana); // Vai me retornar o número do dia da semana (hoje é terça) // Resultado: 2

let diaSemanaTexto;

// Não queremos que seja exibido esse 2 para o usuário, pois ele não vai saber que 2 representa terça-feira. Podemos resolver isso utilizando IF:
if (diaSemana === 0) { // Estamos utilizando 1 variável e checando nela vários valores se ela é igual ou não. Quando fazemos esse tipo de condição, é o caso perfeito para utilizarmos Switch.
    diaSemanaTexto = 'Domingo'    
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda'
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça'
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta'
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta'
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta'
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sábado'
} else {
    diaSemanaTexto = 'Dia inválido'
}

console.log(diaSemana, diaSemanaTexto) // Resultado: 2 Terça

/* VER NO OUTRO ARQUIVO DA AULA O USO DO SWITCH */