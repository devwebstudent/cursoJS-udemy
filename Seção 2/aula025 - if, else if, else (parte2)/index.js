// Nessa aula vamos treinar nossa lógica de programação

/* COMPORTAMENTOS DAS CONDICIONAIS - ALGUMAS OBSERVAÇÕES:
O IF e o ELSE dependem um do outro
A partir do momento que o JavaScript encontrar UMA condição VERDADEIRA, ele vai executar o bloco de código e vai sair fora do bloco e seguir o fluxo normal do programa (abaixo da condicional)
Se temos 2 blocos com condição VERDADEIRA, ele vai executar o primeiro e pular fora da condição sem executar o outro bloco verdadeiro
Se quisermos checar alguma coisa fora do IF, posso criar outro IF
Se preciso checar alguma coisa independente, crio um IF independente para aquela coisa

*/


// No exemplo abaixo, quero saber se o número está entre 0 e 10.

// IF = Se isso for VERDADE, execute esse bloco. / ELSE = Se não, execute este bloco.
const numero = 10;
if (numero >= 0 && numero <= 10){
    // Estamos testando intervalo de números
    console.log(`${numero} está entre 0 e 10`);
} else {
    console.log(`${numero} NÃO está entre 0 e 10`);
}


// IF e ELSE IF = Quando precisamos checar mais de uma condição
const numero2 = 30;
if (numero2 >= 0 && numero2 <= 10) {
    console.log(`${numero2} está entre 0 e 10`)
} else if (numero2 >= 11 && numero2 <= 20) {
    console.log(`${numero2} está entre 11 e 20`)
} else if (numero2 >= 21 && numero2 <= 30) {
    console.log(`${numero2} está entre 21 e 30`)
} else {
    // O ELSE só será executado caso nada acima seja VERDADEIRO
    console.log(`${numero2} NÃO está entre 0 e 30`)
}


// Este IF não está ligado com o IF acima. Aqui estamos checando uma coisa e acima estamos checando outra coisa. Ver observação na linha 7.
if (numero2 < 10) {
    console.log('O número não é menor que 10')
} else {
    console.log('O número é maior que 10')
}


// Essa parte não tem nada a ver com nosso IF
console.log('... Aqui vem o resto do código');