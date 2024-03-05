//              0        1       2          3          4 
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

const removidos = nomes.splice(3, 2) // Começando do índice 3 e removendo 2 elementos até o final
console.log(removidos) // [ 'Gabriel', 'Júlia' ]
console.log(nomes) // [ 'Maria', 'João', 'Eduardo' ]