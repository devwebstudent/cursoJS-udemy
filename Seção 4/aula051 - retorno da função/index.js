// Sobre return:
// retorna um valor;
// função termina ali;
// temos função que não retornam e que não retornam valor, mas que fazem alguma coisa útil. Isso vai depender do contexto onde estamos utilizando

// Podemos retornar qualquer coisa numa função: podemos retornar outra função, podemos retornar um objeto, valores primitivos, etc.

function soma(a, b) {
    return a + b
}

console.log(soma(10, 20)) // Essa função retorna 30 e o console.log pegou esse valor e exibiu na tela.



// Essa função não vai retornar nada:
function soma2(a, b) {
    console.log(a + b) // Resultado: 7 -> isso que vamos ver não é o retorno, é só o que a função está fazendo
}

soma2(5, 2)