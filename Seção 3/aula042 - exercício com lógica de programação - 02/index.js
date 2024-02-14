// Escreva uma função chamada ePaisagem que recebe 2 argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.


// Minha solução:
function ePaisagem(largura, altura) {
    return largura > altura ? true : false;
}

console.log(ePaisagem(1920, 1080)); // Resultado: true


// Solução do professor:
function ePaisagem2(largura, altura) {
    return largura >= altura; // Não precisamos colocar true ou false, pois o operador de comparação já retorna isso. Aqui colocamos o >=, pra também checarmos imagens quadradas.
}

console.log(ePaisagem2(1080, 1920)) // Resultado: false



// Solução utilizando arrow function:
let ePaisagem3 = (largura, altura) => largura > altura;
console.log(ePaisagem3(1920, 1080)); // Resultado: true