// Funções recursivas: a função chama ela mesma de volta; muito similar ao que as estruturas de repetição fazem
// Ela executa o código dela e se chama de volta

// No exemplo abaixo: 
// Enviei o 0, chequei a condição (0 é menor que 10, então continua o código), somei +1, mostrei o 1 na tela e por fim a função se chama de volta
// Na hora que o max for maior ou igual a 10, a função vai parar de executar e não vai executar o código abaixo do return

// Vamos criar uma função recursiva que vai contar números de 1 a 10
// A cada vez que eu chamar essa função, incremento o número enviado pro parâmetro em +1
function recursiva(max) {
    console.log(max)
    // A primeira coisa que vamos fazer é: se o max for maior que 10, não deixo a função executar
    if(max >= 10) return; // Se o número for maior ou igual a 10, ela para
    max++; // Vamos somar +1 a cada chamada dessa função
    recursiva(max) // Pra eu chamar essa função de volta colocamos o nome da função e o parâmetro que enviei
}


recursiva(0)