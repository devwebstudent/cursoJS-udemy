/* Maneiras de declarar funções em JavaScript

- Declaração de função: quando uso a palavra function. É uma declaração mais literal de declarar uma função. Aqui ocorre o function hoisting. Quando declaramos função utilizando a palavra function, ocorre o hoisting.

A engine do JS vai elevar para o topo do script a declaração de funções criadas com function e declaração de variáveis criadas com var.
O mais natural é você criar a função e depois chamar ela, mas também posso colocar a chamada antes da função criada com function, pois a engine do JS eleva a função para o topo.


*/

// Declaração de função utilizando function (maneira clássica de declarar função):
function falaOi() {
    console.log('oi')
}

falaOi()