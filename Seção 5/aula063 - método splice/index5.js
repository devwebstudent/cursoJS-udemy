// Começando do índice 3, quero que ele não remova nenhum elemento, mas adicione 'Luiz' no índice 3

//              0        1       2          3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

const removidos = nomes.splice(3, 0, 'Luiz') // Começa do índice 3, não remove nenhum elemento, adiciona 'Luiz' no Índice 3
console.log(removidos) // [] -> array vazio, pois não removemos nada
console.log(nomes) // [ 'Maria', 'João', 'Eduardo', 'Luiz', 'Gabriel', 'Júlia' ] -> Luiz no índice 3, Gabriel foi pro índice 4 e Júlia pro Índice 5