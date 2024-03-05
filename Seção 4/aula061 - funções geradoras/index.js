// Funções geradoras - elas tem um recurso especial que seria quase que pausar o código em determinado local (lazy evaluation) -> onde a função nunca vai te entregar todos os valores de uma vez
// Isso pode ser bom para a performance do programa
// O 'yield' é quase como se fosse um retorno
// O 'yield' vai me retornar um desses valores sempre que eu chamar a função geradora. Na primeira vez que eu chamar a função geradora, ele vai me retornar o primeiro yield, da segunda vez o segundo yield, etc.
// Para eu ver o valor, utilizamos a notação de ponto. No nosso exemplo, fazemos g1.next() -> é um método dentro do objeto gerador
// Fazendo isso, retorna um objeto -> { value: 'valor 1', done: false }

// value: 'valor 1' -> é onde está o valor
// done: false -> já terminou o gerador? o valor de done está como false, pois ainda não terminou a função geradora, pois ainda temos mais valores para se obter
// done: true -> acabou o gerador de objetos, não tem mais valores
// Então é através de done que ele sabe que acabou os valores


// Como falamos qual valor a função vai me entregar?
function* geradora1() {
    yield 'valor 1';
    yield 'valor 2'
    yield 'valor 3'
}

const g1 = geradora1();
console.log(g1.next().value) // Vai me entregar o valor do primeiro yield // Resultado: valor 1
console.log(g1.next().value) // Vai me entregar o valor do segundo yield // Resultado: valor 2

console.log(g1.next()) // Ao mandarmos exibir o objeto -> { value: 'valor 3', done: false }
console.log(g1.next()) // Ao mandar exibir de novo -> { value: undefined, done: true } -> acabou meu gerador de objetos, não tem mais valores