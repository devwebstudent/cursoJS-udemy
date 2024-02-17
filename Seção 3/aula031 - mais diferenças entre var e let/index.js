// Como já vimos, não podemos redeclarar uma variável com let
// LET tem escopo de bloco (tudo que tiver dentro de chaves) -> {... isso é um bloco}
// LET -> caso eu crie o let dentro de um bloco, quem está fora do bloco não consegue acessar
// VAR só tem escopo de função
// O único escopo que VAR respeita é o escopo de função

const verdadeira = true;

let nome = 'Luiz';
var nome2 = 'Luiz'; // Criando

console.log(nome); // Já aqui vai aparecer 'Luiz', pois tem um let nome no escopo global // Resultado: Luiz
console.log(nome2); // Resultado: Otávio


if (verdadeira) {
    let nome = 'Otávio' // Nesse caso, não estamos redeclarando o let, estamos criando outro let dentro do bloco. Apesar de terem o mesmo nome, são variáveis diferentes.
    console.log(nome, nome2) // // Resultado: Otávio Luiz

    if (verdadeira) {
        let nome = 'Outra coisa'
        console.log(nome) // Resultado: Outra coisa
        // O motor do JS vai buscar a variável dentro desse bloco, caso encontre, vai exibir esse valor. Caso ele não encontre, ele vai buscar num bloco maior. Caso ele não encontre no bloco maior, ele vai procurar no escopo global e, caso encontre, vai exibir.
    }
}


// Fazendo a mesma coisa com VAR
if (verdadeira) {
    let nome = 'Otávio'; // criando
    var nome2 = 'Rogério'; // redeclarando

    if (verdadeira) {
        let nome = 'Outra coisa'; // criando
        var nome2 = 'Ronaldo'; // redeclarando
    }
}

console.log(nome, nome2) // Vai pegar o nome do escopo global (linha 7), pois let tem escopo de bloco; vai pegar o último nome2 declarado (linha 35) // Resultado: Luiz Ronaldo