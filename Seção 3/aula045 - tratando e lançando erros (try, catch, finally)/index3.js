// Outra coisa que podemos fazer é aninhar nossos TRY CATCH

try {
    // Executado quando não há erros
    console.log('Abri um arquivo.')
    console.log('Manipulei o arquivo e gerou erro.')
    console.log('Fechei o arquivo.')

    try { // Temos um TRY dentro de outro TRY
        console.log(b)
    } catch(e) {
        console.log('Deu erro aqui')
    } finally {
        console.log('Também sou FINALLY: Sempre sou executado.')
    }

} catch(e) {
    // Executado quando há erros
    console.log('Tratando o erro.')

} finally {
    // Será executado sempre. Dando erro ou não, o FINALLY sempre será executado.
    console.log('FINALLY: Eu sempre sou executado.')
}