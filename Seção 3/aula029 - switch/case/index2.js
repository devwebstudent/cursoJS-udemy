// FAZENDO O MESMO EXERCÍCIO UTILIZANDO SWITCH
// Sempre que estamos checando apenas uma variável, podemos utilizar Switch SE QUISERMOS.
// NUNCA ESQUECER DE UTILIZAR BREAK APÓS CADA CASE
// Se colocarmos a estrutura Switch dentro de uma função, podemos eliminar os break (ver no index3.js)

const data = new Date();
let diaSemana = data.getDay();
console.log(diaSemana);
let diaSemanaTexto;

// variável que quero checar
switch (diaSemana) {
    case 0: // Caso o dia for 0, execute o bloco abaixo - no case coloco o valor que eu quero checar
        diaSemanaTexto = 'Domingo'; // Caso case 0 seja VERDADEIRO, diaSemanaTexto terá seu valor como 'Domingo'.
        break; // Estamos dizendo para terminar o código aqui caso o valor seja encontrado. NUNCA ESQUEÇA DE COLOCAR BREAK.

    case 1:
        diaSemanaTexto = 'Segunda';
        break;

    case 2:
        diaSemanaTexto = 'Terça';
        break;

    case 3:
        diaSemanaTexto = 'Quarta';
        break;

    case 4:
        diaSemanaTexto = 'Quinta';
        break;

    case 5:
        diaSemanaTexto = 'Sexta';
        break;

    case 6:
        diaSemanaTexto = 'Sábado';
        break;

    default: // Valor padrão caso nenhuma condição acima for atendida
        diaSemanaTexto = 'Dia inválido';
        break; // O break no default é OPCIONAL, mas é sempre bom colocar.
}

console.log(diaSemanaTexto)