// Também podemos lançar nossos próprios erros. Exemplo:

// Função que soma 2 números. x e y precisam ser numéricos, se não forem NUMBER, a soma vai concatenar o valor e pode gerar um valor errado no final. Vai gerar algum transtorno no final.
// No nosso exemplo, queremos checar se x e y realmente são números. Se não forem, vamos lançar um erro. Veja:
function soma(x, y) {
    if (
        typeof x !== 'number' || typeof y !== 'number') { // Aqui estamos checando: se o tipo de x não for NUMBER ou o tipo de y não for um NUMBER
        throw new ReferenceError('x e y precisam ser números.') // Aqui estamos criando um novo erro. Se o erro for lançado aqui, a função já vai parar aqui e não vai executar o que está abaixo.
        // Pra gente lançar erro, fazemos: throw new Error ou ReferenceError
        // Esses erros são para o desenvolvedor entender o tipo de erro que ocorreu, só para quem está analisando o erro.
    }

    return x + y;
}


// Tratando nosso erro:
try {
    console.log(soma(1, 2)) // Aqui ele vai executar e vai retornar o resultado: 3
    console.log(soma('10', 20)) // Quando ocorrer o erro aqui, ele vai lançar nosso erro: x e y precisam ser números.
} catch (error) {
    // console.log(error) // Isso vai exibir um erro igual ao que o JS lança quando erramos alguma coisa. -> Esse é o erro que vai aparecer, mas não é interessante exibir para o usuário final. Abaixo algo mais amigável.
    console.log('Alguma coisa mais amigável pro usuário.')

}

// Como falamos, não é interessante exibir esse erro para o usuário final. Pro backend talvez não tenha tanto problema assim, mas se for lançar algum erro para o usuário, exiba um alerta, por exemplo.