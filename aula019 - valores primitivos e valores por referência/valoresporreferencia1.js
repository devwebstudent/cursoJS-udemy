/*
Tipos de dados por REFERÊNCIA (valores mutáveis): array, object, function - Por referência significa que apontam para o mesmo lugar na memória
Veja abaixo:
*/

let a = [1, 2, 3];
let b = a; // Nesse caso, não estou copiando o valor, pois array não é um dado primitivo - b vai estar apontando para o mesmo lugar que a na memória.
console.log(a, b)

// Se eu altero o valor de um, o outro também é alterado.

a.push(4) // Se adicionarmos um valor em a, b também vai ser afetado
console.log(a, b) // Resultado: [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

b.pop() // Ao removermos um valor de b, a tb é afetado, pois ambos estão apontando para o mesmo lugar na memória
console.log(a, b) // Resultado: [ 1, 2, 3 ] [ 1, 2, 3 ]

a.push('Luiz');
let c = b; // Continuo tendo mais uma variável apontando para o mesmo valor na memória
console.log(c) // c vai estar com os mesmos valores de a e b, pois todos estão apontando para o mesmo lugar na memória. // Resultado: [ 1, 2, 3, 'Luiz' ]



// Se por algum motivo eu quiser copiar o valor de a para dentro de b. Isso faz com que não apontem mais para o mesmo lugar na memória. Vamos utilizar o operador ... Veja abaixo:
b = [...a] // O valor de a foi copiado para b - Estou fazendo um spread do array a dentro de b. Nesse caso, o valor de b é totalmente independente.
b.push(15)
console.log(b, c) // Ao mandarmos exibir, veja que o 15 foi para b, mas não foi para dentro de a // Resultado: [ 1, 2, 3, 'Luiz' ] [ 1, 2, 3, 'Luiz', 15 ]