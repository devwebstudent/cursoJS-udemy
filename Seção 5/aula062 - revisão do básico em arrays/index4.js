// Removendo elementos do começo e do final do array

//                 0         1        2
const nomes = ['Eduardo', 'Maria', 'Joana'];

// Removendo elemento do começo do array - array.shift()
const removido = nomes.shift()
console.log(nomes, removido) // [ 'Maria', 'Joana' ] Eduardo


// Removendo elemento do final do array - array.pop() - MUITO UTILIZADO
const removido2 = nomes.pop()
console.log(nomes, removido2) // [ 'Maria' ] Joana