// Os valores por referência podem ser copiados utilizando spread operator (...)

//                 0         1        2
const nomes = ['Eduardo', 'Maria', 'Joana'];


// Espalhando dados do array utilizamos (copiar todos os elementos do array e espalhar dentro de outro array)
const novo = [...nomes];
console.log(novo) // [ 'Eduardo', 'Maria', 'Joana' ]

novo.pop() // Removendo último elemento de 'novo'

// Assim, o que eu faço em 'novo' não reflete em 'nomes', pois fizemos uma cópia do que estava em 'nomes' pra dentro de 'novo'
console.log(nomes) // [ 'Eduardo', 'Maria', 'Joana' ]
console.log(novo) // [ 'Eduardo', 'Maria' ]