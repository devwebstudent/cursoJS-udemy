// Suponha que temos uma função que some a e b, mas mando só o parâmetro do a
// Como não mandamos nenhum argumento para b, ele vai estar com valor de undefined
// 5 + undefined = NaN
// Deveríamos colocar um valor padrão para b

function funcao(a, b = 0) { // maneira mais moderna de setar valor padrão (b = 0)
    // b = b || 0 -> maneira antiga de setar valor padrão
    console.log(a + b); // Resultado: 2
}

funcao(2);


// -----------------------------------------------------------


// O que acontece com o valor de b se mando 10 como argumento para ele?
// O valor do argumento vai substituir o valor padrão
function funcao2(a, b = 0) {
    console.log(a + b); // Resultado: 12
}

funcao(2, 10)


// -----------------------------------------------------------


// Fazendo b assumir o valor padrão
// Temos que enviar 'undefined' como valor para b
// A única maneira de fazermos b assumir o valor padrão (5) é enviando undefined como argumento

function funcao(a, b = 5, c = 0) {
    console.log(a + b + c); // Resultado: 12
}

funcao(2, undefined, 5)
