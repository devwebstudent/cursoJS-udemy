// Também podemos utilizar números negativos para remover elementos do array

//             -5       -4      -3         -2         -1     -> nos negativos os índices começam do -1
//              0        1       2          3          4     -> nos positivos os índices começam do 0
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

const removidos = nomes.splice(-2, 2) // Começando do índice -2 e remover 2 elementos dali até o FINAL do array
console.log(removidos) // [ 'Gabriel', 'Júlia' ]
console.log(nomes) // [ 'Maria', 'João', 'Eduardo' ]