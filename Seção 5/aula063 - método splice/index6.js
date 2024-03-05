// Se quisermos remover Gabriel e Júlia para adicionar Luiz e Otávio em seus lugares

//              0        1       2          3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

const removidos = nomes.splice(3, 2, 'Luiz', 'Otávio') // Começa no índice 3, remove 2 elementos, adiciona Luiz e Otávio
console.log(removidos) // [ 'Gabriel', 'Júlia' ]
console.log(nomes) // [ 'Maria', 'João', 'Eduardo', 'Luiz', 'Otávio' ]