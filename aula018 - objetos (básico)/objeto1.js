// PARA CRIARMOS UM OBJETO, UTILIZAMOS {} ->  ARRAY = []; OBJETO = {}
// Dentro do nosso objeto, podemos criar atributos para a variável pessoa1. Esse atributos seriam como variáveis, só que ela está dentro da nossa pessoa1.

// Não precisamos utilizar a palavra const ou let para criar esses atributos. Colocamos o atributo: 'valor' e separo por vírgula. Veja abaixo:
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

// Para acessarmos determinado atributo, utilizamos a notação de ponto (.) Fica assim:
console.log(pessoa1.nome); // Vai mostrar o nome da pessoa // Resultado: Luiz
console.log(pessoa1.sobrenome); // Mostra o sobrenome // Resultado: Miranda
console.log(pessoa1.idade); // Mostra a idade // Resultado 25

// Criando outros objetos:
const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 55
};



// PODEMOS CRIAR UMA FUNÇÃO QUE CRIA OBJETOS PARA MIM - Chamamos essa função de factory, ela cria objetos.
function criaPessoa(nome, sobrenome, idade) {
    return { // Vai retornar um objeto
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

// Criando vários objetos
const pessoa3 = criaPessoa('João', 'Silva', 25);
const pessoa4 = criaPessoa('Roberto', 'Miranda', 45);
console.log(pessoa3.nome, pessoa4.nome);

// SIMPLIFICANDO NOSSA FUNCTION DE CRIAR OBJETOS:
function criaPessoa2(nome, sobrenome, idade) {
    return { nome, sobrenome, idade }; // Quando temos valores iguais, como os visto na function la em cima, o próprio JS já sabe que é pra criar nome, sobrenome e idade com seus respectivos valores.
}

const pessoa5 = criaPessoa2('Paulo', 'Gustavo', 37);
const pessoa6 = criaPessoa2('Joana', 'Souza', 44);
console.log(pessoa5, pessoa6)


// CONTINUAÇÃO NO objeto2.js