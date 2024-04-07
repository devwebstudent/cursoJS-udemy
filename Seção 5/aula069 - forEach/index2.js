// forEach é uma forma diferente de iterar sobre arrays
// o forEach só está disponível dentro de arrays
// forEach é muito similar as funções map(), filter() e reduce()
// forEach só itera sobre os valores, nada além disso, não vai retornar um novo valor
// ele só vai fazer a mesma coisa que o for faz

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
a1.forEach(function(valor, indice, array)  {
    console.log(indice, '-' , valor)
})

/* Resultado:
0 10
1 20
2 30
3 40
4 50
5 60
6 70
7 80
8 90

*/