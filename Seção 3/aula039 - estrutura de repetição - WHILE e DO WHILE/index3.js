// Exemplo mais real do uso do WHILE: vamos criar uma função que gera um número aleatório entre 1 e 50

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.round(r);
}

const min = 1;
const max = 50;
let rand = random(min, max) // Pegando nosso número aleatório gerado pela função e guardando na variável rand

// Suponha que a cada vez que é gerado um número aleatório eu quero saber quando o número é 10. Se o número for 10, saio fora do laço
// Enquanto rand for diferente de 10, continuo executando o laço. Se for igual a 10, ele vai sair fora do laço.
// PS: Vamos ter que atualizar nossa variável rand a cada iteração do laço, se não teremos um laço infinito.


while (rand !== 10) { // Enquanto nosso número aleatório for diferente de 10, executa o laço
    rand = random(min, max) // Chamando a função.
    console.log(rand) // Assim que exeibir o número 10, vai parar de executar essa repetição e sair fora do laço. O último número sempre será 10.
}

// O laço WHILE é mais utilizado quando não sabemos quando ela vai terminar. Enquanto a condição for VERDADEIRA, nosso código vai ficar sendo executado.
// Na primeira vez que a condição for FALSA, vai sair fora do laço e parar de executar nosso laço.