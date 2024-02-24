// Se por acaso tenha um erro no TRY do nosso programa, agora o bloco do CATCH será executado:

try {
    // Executado quando não há erros
    console.log(a) // Aqui está o erro. O que está abaixo não será executado. Caso tenha erro, vai ser executado o bloco CATCH.
    console.log('Abri um arquivo.')
    console.log('Manipulei o arquivo e gerou erro.') // Se por acaso você abrir e por algum motivo não fechou o arquivo, isso geraria erros, que vai pro bloco CATCH. Ele não passaria na linha abaixo desta.
    console.log('Fechei o arquivo.')

} catch (erro) {
    // Executado quando há erros
    console.log('Tratando o erro.')
    // console.log(erro) // Se mando exibir o erro, diz qual foi o erro: a não foi definido

} finally {
    // Será executado sempre. Dando erro ou não, o FINALLY sempre será executado.
    console.log('FINALLY: Eu sempre sou executado.')
}

// Agora nosso bloco do CATCH será executado. O FINALLY também será executado, pois o bloco do FINALLY sempre é executado.


// Como vimos, o FINALLY sempre é executado, independente se tiver erros ou não no nosso código. 
// É muito útil quando você precisa abrir um arquivo, corre risco que aconteça algum erro no meio do caminho e você não fecha esse arquivo. Daí você sempre pode fechar ele no FINALLY.