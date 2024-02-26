// No exemplo anterior, precisamos dar um nome e nossa função qualquerCoisa() toca o escopo global. 
// Imagina que queremos criar uma função anônima só.
// Nesse caso que vamos ver do IIFE, a função não vai ter nome (função anônima), então não vai ter como ela tocar o escopo global

// Para criarmos uma função que é invocada automaticamente quando ela é criada, podemos envolver ela em parênteses ()
// Abrimos parênteses e criamos uma função anônima dentro desses parênteses
// Fora dos parênteses eu chamo minha função imediatamente
// Agora tudo que eu escrever nesse código vai ser executado imediatamente e nada disso toca o escopo global

// Se fizermos diferente disso, como por exemplo criar a função fora dos parênteses e já chamar ela, daria um erro de simtaxe. Por isso, devemos envolver com ()


// Exemplo: variáveis que estão dentro não têm conflito com variáveis que estão no escopo global
// O meu código está protegido por uma função que foi invocada imediatamente

(function() {
    const nome = 'Luiz'
    console.log(nome)
})()

const nome = 'Otávio'
console.log(nome)