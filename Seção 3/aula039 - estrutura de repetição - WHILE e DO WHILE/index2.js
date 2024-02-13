// Poderiamos ter um ARRAY ou uma STRING e iterar elas
// Não é muito recomendado usar o WHILE ou DO WHILE desse jeito. É melhor utilizar o FOR no nosso exemplo. 

const nome = 'Luiz';
let i = 0;
while (i < nome.length) {
    console.log(nome[i]) // Resultado: L u i z
    i++
}