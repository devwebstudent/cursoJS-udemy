// COLOCANDO NOSSO SWITCH DENTRO DE UMA FUNÇÃO - PODEMOS ELIMINAR OS BREAK
// Sempre que a função encontra a palavra 'return', acaba a execução da função ali

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;

        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;

        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;

        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;

        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;

        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;

        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;

        default:
            diaSemanaTexto = 'Dia inválido';
            return diaSemanaTexto;
    }
    
}

const data = new Date(); // Criando nova data
let diaSemana = data.getDay(); // Pegando o dia da semana desta data

// Chamando nossa função
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
console.log(diaSemana, diaSemanaTexto)

