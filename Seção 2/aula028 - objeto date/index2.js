// CONTINUAÇÃO

// Função que coloca o 0 à esquerda se o número for menor que 10
function zeroAEsquerda(num) {
    return num >=10 ? num : `0${num}`; // Se o número for maior que 10, só adiciona o número; se o número for menor que 10, adiciona 0 à esquerda do número // Isso vai retornar pra nossa chamada a partir da linha 11
}

// CRIANDO UMA FUNÇÃO QUE FORMATA UMA DATA
function formataData(data) { // Vamos receber uma data já criada
    const dia = zeroAEsquerda(data.getDate()); // Pegamos o dia e chamamos a função de colocar o 0 a esquerda do numero
    const mes = zeroAEsquerda(data.getMonth() + 1); // Pegamos o mês que começa com 0 e soma + 1, pois na vida real o mês não começa em 0
    const ano = zeroAEsquerda(data.getFullYear()); // Pegamos o ano
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `Hoje é: ${dia}/${mes}/${ano} e são ${hora}:${min}:${seg}`; // Retorna a data já formatada, com dia/mês/ano
}

const data = new Date(); // Cria a data atual
const dataBrasil = formataData(data) // Chamando nossa função, que vai enviar o argumento data para nosso parâmetro
console.log(dataBrasil) // Exibindo nossa data atual