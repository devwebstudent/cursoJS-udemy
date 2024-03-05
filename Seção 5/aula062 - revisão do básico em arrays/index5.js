// Adicionando elementos do começo e do final do array

//                 0         1        2
const nomes = ['Eduardo', 'Maria', 'Joana'];

// Adicionando elemento no final do array - array.push() - MUITO UTILIZADO
nomes.push('João')
console.log(nomes) // [ 'Eduardo', 'Maria', 'Joana', 'João' ]


// Adicionando elemento no início do array - array.unshift()
nomes.unshift('Carlos')
console.log(nomes) // [ 'Carlos', 'Eduardo', 'Maria', 'Joana', 'João' ]