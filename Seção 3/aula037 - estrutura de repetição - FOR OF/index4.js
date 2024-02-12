// Iterando ARRAY utilizando FOR OF

//               0        1          2
const nomes = ['Luiz', 'Otávio', 'Henrique']

// Com FOR (clássico) - Se eu quiser que ele mostre só o índice, utilizo apenas minha variável i: console.log(i)
for (let i = 0; i < nomes.length; i ++) {
    console.log(nomes[i]); // Resultado: Luiz, Otávio, Henrique
}

// Com FOR IN - Percorre o índice do array - Se eu quiser que ele mostre só o índice, utilizo apenas minha variável índice: console.log(indice) - UTILIZO QUANDO QUERO PEGAR O ÍNDICE DE DETERMINADO ARRAY
for (let indice in nomes) {
    console.log(nomes[indice]); // Resultado: Luiz, Otávio, Henrique
}

// Com FOR OF - Vai percorrer esses índices e retornar o valor do array nomes - UTILIZO QUANDO QUERO PEGAR APENAS O VALOR DO ARRAY
for (let valor of nomes) {
    console.log(valor); // Resultado: Luiz, Otávio, Henrique
}

// Note que teremos o mesmo resultado para o FOR, FOR IN e FOR OF, mas no FOR e FOR IN você teria que indicar a variável indice no nosso array






// Com forEach() - Apenas vendo, temos aula específica para ele
nomes.forEach(function(valor, indice) {
    console.log(valor, indice) // Resultado: Luiz 0, Otávio 1, Henrique 2
})