// Simulando a função array.shift() -> para remover do começo do array

//              0        1       2          3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

const removidos = nomes.splice(0, 1)
console.log(removidos) // [ 'Maria' ]
console.log(nomes) // [ 'João', 'Eduardo', 'Gabriel', 'Júlia' ]


// Simulando o push() - Adicionando no final do array (é melhor utilizar o push(), pois é muito mais fácil)
const nomes2 = [ 'Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia' ]
nomes2.splice(5, 0, 'José') // Começa no índice 5 (que não existe), não remove nada, adiciona José
console.log(nomes2) // [ 'Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia', 'José' ]


// Simulando unshift() - Adicionando no começo do array
const nomes3 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']
nomes3.splice(0, 0, 'Carlos') // Começa no índice 0, não remove nada, adiciona Carlos no índice 0
console.log(nomes3) // [ 'Carlos', 'Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia' ]