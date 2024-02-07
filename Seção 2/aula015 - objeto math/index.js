// O objeto Math vai fazer algumas coisas relacionadas com esse número pra mim

// MÉTODOS PARA ARREDONDAR NÚMEROS -> floor(), ceil(), round()
let num1 = 9.54578;
let arredondar1 = Math.floor(num1); // Método floor() - Arredonda para baixo (deixa ele como um número inteiro)
console.log(arredondar1); // Resultado: 9

let arredondar2 = Math.ceil(num1); // ceil() - Arredonda para cima
console.log(arredondar2);  // Resultado: 10

let arredondar3 = Math.round(num1); // round() - Arredonda automaticamente para número inteiro mais próximo - Ex: 9.49 ele vai arredondar para 9; 9.55 ele vai arredondar para 10
console.log(arredondar3); // Resultado: 10



// MÉTODOS PARA SABERMOS O MAIOR OU MENOR NÚMERO EM UMA LISTA DE NÚMEROS -> max() e min()
console.log(Math.max(1, 2, -15, 80, 47, 12, 37, 10)); // max() - Ele pega o maior número dentro de uma sequência de números // Resultado: 80
console.log(Math.min(-8, 4, 74, 12, 15, -47, 60, 32, 13)); // min() - Pega o menor número dentro de uma sequência de números // Resultado: -47


// MÉTODO PARA GERAR NÚMEROS ALEATÓRIOS -> random() -> O 1 NUNCA é incluído
const aleatorio = Math.random(); // random() - Vai gerar um número aleatório entre 0 e 1, mas o 1 NUNCA é incluído
console.log(aleatorio);

const aleatorio2 = Math.round(Math.random() * 100) // random() - Para gerar um número aleatório entre 0 e 1 multiplicado por 100 - Note que também arredondamos utilizando o método round()
console.log(aleatorio2);


// MÉTODO PARA MOSTRAR POTÊNCIA DE UM NÚMERO -> pow() ou fazendo diretamente com operadores -> Ex: 2 ** 3 = 8
let num2 = Math.pow(2, 3);  // pow()  - Para fazer um número ser elevado a uma potência -> Não precisamos utilizar esse método, podemos fazer diretamente utilizando o operador ** (potência)
console.log(num2); // Resultado: 8
console.log(2 ** 3); // Fazendo utilizando o operador ** (potência), temos o mesmo resultado -> // Resultado: 8


// MÉTODO PARA MOSTRAR A RAIZ QUADRADA DE UM NÚMERO -> sqrt() ou fazendo diretamente com operadores -> Ex: 25 ** 0.5 = 5
let num3 = 25;
console.log(Math.sqrt(num3)); // sqrt() - Para saber a raiz quadrada de um número // Resultado: 5
console.log(num3 ** 0.5); // Também podemos fazer assim: O número elevado a  0.5 -> 25 ** 0.5 -> Resultado: 5