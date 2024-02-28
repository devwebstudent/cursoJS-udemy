function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        fala: function(assunto) {
            return `${peso} está falando ${assunto}` // Se fazermos assim, vai dar peso is not defined, pois ele não está no escopo dessa função. Não é possível acessar essa propriedade desta maneira. Precisamos falar qual objeto está acessando esta chave. Para isso, utilizamos a palavra 'this'
        }, 
        peso: 80
    }
}

const p1 = criaPessoa('Luiz', 'Otávio')
console.log(p1.fala('falando sobre JS'))