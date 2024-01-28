let num1 = prompt('Digite um número') // Salva o que o usuário digitou dentro da variável
let num2 = prompt('Digite outro número')

num1 = Number(num1) // Converte o que é digitado no prompt de STRING para NUMBER
num2 = Number(num2)
let resultado = num1 + num2 // Guarda a soma de num1 + num2

alert(`O resultado foi de ${resultado}`) // Exibe um alerta mostrando o resultado da conta


/* Obs.: Posso colocar uma expressão diretamente dentro de uma TEMPLATE STRING.
Exemplo:
alert(`O resultado foi de ${num1 + num2}`)

Fazer desse jeito diminui o tamanho do seu código, mas o deixa mais complexo também, caso nosso código esteja muito grande, fica difícil de compreender.

Em alguns casos poderemos fazer isso e em outros não. Em códigos mais complexos, fazer dessa forma tende a aumentar a complexidade do nosso código.
Seria muito melhor criar uma variável de resultado e jogar o resultado dentro da nossa template string.
Exemplo:
alert(`O resultado foi de ${resultado}`)

*/