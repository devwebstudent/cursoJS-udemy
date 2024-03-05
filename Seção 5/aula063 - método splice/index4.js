// Removendo de um lugar até o fim do ARRAY

//             -5       -4      -3         -2         -1     -> nos negativos os índices começam do -1
//              0        1       2          3          4     -> nos positivos os índices começam do 0
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

// Number.MAX_VALUE é o maior número que pode ser representado em JAVASCRIPT
// Aqui estamos removendo do índice 2 até o final do nosso ARRAY

const removidos = nomes.splice(-2, Number.MAX_VALUE) // Começa do -2 e vai remover até o final do array
console.log(removidos) // [ 'Gabriel', 'Júlia' ]
console.log(nomes) // [ 'Maria', 'João', 'Eduardo' ]