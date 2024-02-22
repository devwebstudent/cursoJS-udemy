// Imagina que vamos enviar apenas 6 dos 7 argumentos para os parâmetros da função

function funcao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f); // Resultado: 1 2 3 4 5 6
}

funcao(1, 2, 3, 4, 5, 6, 7) // Estamos enviando um argumento a mais, mas vai funcionar normalmente.




// Mas e se eu mandar só até o 3, o que vai acontecer com o resto das variáveis?

function funcao2(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f); // Resultado: 1 2 3 undefined undefined undefined // O JS criou as variáveis d, e, f, mas assim como declaramos variáveis sem valor, ele setou o valor padrão 'undefined'
}

funcao2(1, 2, 3)

// O JS não vai gerar erro nenhum na função quando divergir o número de argumentos com o número de parâmetros