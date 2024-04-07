// Object.keys() -> retorna o nome das propriedades em um array
// Object.values() -> retorna os valores das propriedades em um array
// Object.entries() -> retorna as propriedades e seus valores em um array

const produto = { nome: 'Produto', preco: 1.80 }
console.log(Object.keys(produto)) // [ 'nome', 'preco' ]

console.log(Object.values(produto)) // [ 'Produto', 1.8 ]

console.log(Object.entries(produto)) // [ [ 'nome', 'Produto' ], [ 'preco', 1.8 ] ]

console.log('###########################################################')


// Iterando sobre esses valores - a cada iteração vamos pegar um array com uma propriedade e um valor
for (let entry of Object.entries(produto)) {
    console.log(entry) 
}

/*  Resultado:
[ 'nome', 'Produto' ]
[ 'preco', 1.8 ]
*/


// Fazendo desestruturação desse objeto
for (let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1])
}

/* Resultado:
nome Produto
preco 1.8
*/