/* RESUMO CHAT GPT:
Uma função de callback é basicamente uma função que é passada como argumento para outra função e é executada dentro dessa função. Em outras palavras, você está "chamando de volta" essa função dentro de outra.

A principal utilidade das funções de callback é permitir que você execute código de forma assíncrona, ou seja, enquanto outras operações estão acontecendo. Isso é especialmente útil em situações onde você precisa esperar por uma ação específica para executar outra ação, como uma requisição de dados a um servidor ou uma animação sendo concluída.

Neste exemplo:

Temos uma função minhaCallback que simplesmente imprime uma mensagem no console.
Temos outra função executaCallback que recebe uma função como argumento e a executa.
Chamamos a função executaCallback passando minhaCallback como argumento.
Quando chamamos executaCallback(minhaCallback), o que acontece é que a função executaCallback executa sua lógica e então chama a função minhaCallback, passada como argumento, e como resultado, vemos a mensagem "A função de callback foi chamada!" impressa no console.

*/

// Definindo uma função de callback
function minhaCallback() {
    console.log("A função de callback foi chamada!");
}

// Função que recebe uma função de callback como argumento
function executaCallback(callback) {
    console.log("Executando a função de callback...");
    callback(); // Aqui estamos chamando a função de callback passada como argumento (minhaCallback)
}

// Chamando a função que executa a callback
executaCallback(minhaCallback);  