// Revisando o básico sobre arrays


//                 0         1        2
const nomes = ['Eduardo', 'Maria', 'Joana'];
console.log(nomes.length) // 3 elementos

// Alterando índice 2 para 'João'
nomes[2] = 'João'; 
console.log(nomes); // [ 'Eduardo', 'Maria', 'João' ]


// Deletando um elemento sem alterar o índice (fica com um elemento vazio no índice 2)
// delete nomes[2] 
console.log(nomes) // [ 'Eduardo', 'Maria', <1 empty item> ]



// Arrays são valores por referência
const novo = nomes // Esse valor foi passado por referência: tudo que eu fizer em um vai refletir no outro
console.log(novo) // [ 'Eduardo', 'Maria', 'João' ]

novo.pop() // Removi o último valor dos 2, pois os 2 arrays estão apontando pro mesmo lugar na memória

// Os 2 arrays vão perder o último elemento
console.log(novo, nomes) // [ 'Eduardo', 'Maria' ] [ 'Eduardo', 'Maria' ]