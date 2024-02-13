// WHILE e DO WHILE funcionam de maneira muito similar aos FOR
// A diferença é que quando utilizamos FOR, geralmente sabemos o tamanho do elemento que estamos trabalhando
// Quando utilizamos WHILE ou DO WHILE, geralmente não sabemos quantas vezes a repetição vai ter que ocorrer até que o laço termine

// Exemplo:

let i = 0; // Variável de controle - iniciando no 0
while (i <= 10) {
    console.log(`Linha ${i}`);
    i++; // Sempre temos que colocar um incremento para atualizar a variável de controle. Se não fizermos isso, criamos um laço infinito (ele nunca vai chegar no valor 10) que vai executar o código pra sempre.
}