// Isso tudo está dentro da minha IIFE - Ela está me protegendo do escopo global
// Também podemos passar argumentos pra nossa IIFE lá onde estamos invocando ela
// Podemos utilizar essas variável dentro também

(function (idade, peso, altura) { // Parâmetros recebidos aqui

    const sobrenome = 'Miranda'
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(criaNome('Luiz'))
    }

    falaNome()
    console.log(idade, peso, altura)

})(30, 80, 1.83) // Argumentos passados aqui


// A única diferença de uma função normal é que esta precisa estar dentro de parênteses