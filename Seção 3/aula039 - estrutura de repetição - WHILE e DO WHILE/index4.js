// A única diferença entre WHILE e DO WHILE é:
// WHILE checa a condição e depois executa o bloco -> Enquanto a condição for VERDADEIRA, executa o bloco
// DO WHILE executa o bloco primeiro e depois checa a condição -> Executa o bloco primeiro, depois checa a condição
// O DO WHILE executa pelo menos uma vez SEMPRE.


// Fazendo o mesmo exemplo do index3.js, mas com DO WHILE:
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.round(r);
}

const min = 1;
const max = 50;
let rand = 10

do {    
    console.log(rand) // Ele sempre vai ser executado pelo menos uma vez antes de checar a condição. // Resultado: 10 -> A condição nesse caso vai dar FALSO, então não vai ser executado nosso DO WHILE de novo.
} while (rand !== 10);