// Continuando com os tratamentos de erro
// Temos uma terceira parte que seria o FINALLY: ele será executado SEMPRE, mas podemos emitir ele se não precisarmos que um código seja executado sempre.
// Geralmente utilizamos apenas TRY e CATCH, mas em alguns momentos vamos precisar do bloco FINALLY.

try {
    // Executado quando não há erros
    console.log('Abri um arquivo.')
    console.log('Manipulei o arquivo e gerou erro.') // Se por acaso você abrir e por algum motivo não fechou o arquivo, isso geraria erros, que vai pro bloco CATCH. Ele não passaria na linha abaixo desta.
    console.log('Fechei o arquivo.')
} catch (e) {
    // Executado quando há erros
    console.log('Tratando o erro.')

} finally {
    // Será executado sempre. Dando erro ou não, o FINALLY sempre será executado.
    console.log('FINALLY: Eu sempre sou executado.')
}

// Aqui não há erros no programa. Ele vai executar tudo que está no TRY e o FINALLY.