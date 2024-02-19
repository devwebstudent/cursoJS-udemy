// Se sabemos que vamos executar um código potencialmente perigoso que pode gerar erro, que pode lançar uma exceção, como no código abaixo, onde tentamos exibir o valor de uma variável, ou usarmos o valor de uma variável que não existe ainda, podemos tratar o erro que vai ocorrer utilizando o bloco try, colocando o código dentro do bloco do try.

// Esse bloco TRY significa tentar: tente executar esse código aqui. Caso ocorra qualquer erro, preciso que caia em outro bloco que é o bloco CATCH
// Dentro do bloco CATCH é o que vamos executar caso ocorra algum erro

// IMPORTANTE: não é interessante que a gente exponha os erros internos dos nossos programas para o usuário final. 

// Como dissemos, não é interessante que se exiba esse erro para o usuário. Trate ele da forma que achar mais conveniente. No nosso exemplo, poderiamos criar uma variável.

try {
    console.log(naoExisto) // Tentando exibir uma varíavel que não existe - Vai gerar um erro, pois essa variável não foi criada. Se o erro ocorrer, vai cair no bloco CATCH.

} catch (erro) { // Bloco catch está recebendo o erro
    console.log('naoExisto não existe.')
    console.log(erro) // Se quero ver o erro. Isso vai mostrar o erro completo e podemos jogar isso num log de erros, por exemplo.
}

