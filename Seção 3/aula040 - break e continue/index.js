// Vamos falar sobre BREAK e CONTINUE dentro dos laços. Isso vai permitir que tenhamos controle de quando, por exemplo, pular um elemento, quebrar o laço e terminar o laço ali a qualquer momento que quisermos.
// BREAK e CONTINUE funciona em todas as estruturas de repetição que vimos anteriormente (FOR, FOR IN, FOR OF, WHILE, DO WHILE)
// No exemplo baixo, suponha que queremos pular alguma dessas interações, como, por exemplo, pularmos o número 2, de modo que ele não seja exibido
// Sempre que o JS encontrar a palavra CONTINUE, ele vai pular para a próxima iteração.
// Sempre vamos colocar o código que não queremos que seja executado abaixo do nosso CONTINUE. Se o console.log(valor) estivesse antes do IF com CONTINUE, seria exibido o número 2.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let valor of numeros) { // Iterando sobre o array numeros
    if (valor === 2) {
        console.log('Pulei o número 2')
        continue; // Sempre que o JS encontrar CONTINUE, ele vai voltar pro começo do laço e continuar a próxima iteração. Nesse caso, estamos pulando o número 2.
    }    
    console.log(valor) // Resultado: 1, Pulei o número 2, 3, 4, 5, 6, 7, 8, 9
}