// Escopo léxico: a função conhece o local onde ela foi declarada (criada), tudo que tá declarado dentro dela e ela sabe os vizinhos dela.
// De dentro da função posso acessar qualquer variável vizinha dessa função. A função pode acessar o que está no escopo global. Isso é o escopo léxico.

// Se busco 'nome' dentro da função e essa variável não está dentro da função, a função vai buscar no pai da função. Se ela não está no pai, ela busca no escopo global.
// Se tiver 'nome' no escopo global, vai ser exibido o valor de 'nome'.
// Se ele buscar em todos os lugares e não encontrar nada, vai dar um erro e falar que a variável não foi definida.

// Em qualquer lugar do código que eu mandar executar essa função, ela continua sabendo o que está dentro dela e o que está fora também.

// Exemplos: imagina que tenho minha variável nome e tenho uma função que precisa dessa variável
let nome = 'Luiz'

function falaNome() {
    console.log(nome)
}

falaNome()