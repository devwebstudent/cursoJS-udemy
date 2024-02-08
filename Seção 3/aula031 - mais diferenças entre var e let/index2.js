// CONTINUANDO: VAR só tem o escopo de função

var nome = 'Luiz';
function falaOi() {
    // Você pode acessar o valor das variáveis que estão no closure (entorno da função). Ela primeiro vai procurar o valor da variável dentro dela, caso não encontre ela procura fora da função.
    // Podemos acessar o que está fora da função, mas o que está fora não consegue acessar o que está dentro.
    // Caso a variável esteja definida dentro da função, ela não vai poder ser acessada de fora.
    var sobrenome = 'Miranda';
    console.log(nome) // Resultado: Luiz -> A função consegue acessar o que está fora
}

console.log(sobrenome) // Vai retornar um erro, pois não podemos acessar a variável que está dentro da função

falaOi()