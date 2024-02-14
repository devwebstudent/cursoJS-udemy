// Agora vamos ver sobre a palavra BREAK. Ela é importante pois ela pode poupar recursos do servidor ou do computador do cliente. Ela pode melhorar a velocidade do código.
// Imagina que estamos procurando um número numa lista de 500 elementos e só quero saber desse número. Se eu quero encontrar o número 7, por exemplo, não preciso mais checar os outros números se eu achar o 7.
// Podemos falar pro JS: se você achar o que estou procurando, sai do laço e não faz mais nada.
// É isso que o BREAK faz: na hora que ele achar a palavra BREAK ele vai parar o laço naquele momento ali e acabou. O BREAK sai do bloco, como vimos com SWITCH/CASE.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let valor of numeros) {
    if (valor === 2) {
        console.log('Pulei o número 2')
        continue;
    }

    console.log(valor)
    if (valor === 7) {
        console.log('7 encontrado, saindo')
        break; // Ele vai chegar no 7 e depois não vai executar mais nada.
    }
}