// ESTRUTURA DE REPETIÇÃO - FOR (CLÁSSICO) - Estruturas de repetição fazem coisas repetitivas para não termos que ficar repetindo códigos.
// O JavaScript vai executar essa repetição enquanto ela for VERDADEIRA. A partir do momento que for FALSA, ela não é mais executada e o programa segue seu fluxo normal.
// Dentro do for precisamos de 3 coisas dentro dos parenteses: criar uma variável de controle, criar uma condição, incrementar ou decrementar nossa variável de controle:
// for (inicio (variável de controle); condição; decremento/incremento da variável de controle)

// Vemos abaixo uma repetição, só estamos mudando o número.
// console.log('Linha 0')
// console.log('Linha 1')
// console.log('Linha 2')
// console.log('Linha 3')
// console.log('Linha 4')
// console.log('Linha 5')


// Vamos criar uma estrutura de repetição que faz a mesma repetição
// O início da minha variável tem que ser o 0 -> i = 0 (i = index)
// A segunda coisa que preciso: condição para dizer quando o for vai parar -> i <= 5 (i é menor ou igual a 5?)
// Terceira coisa: incrementar a variável -> i++
// A cada volta da repetição, nosso i vai ser incrementando com +1
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`)
}