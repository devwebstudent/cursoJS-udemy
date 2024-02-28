// Factory Functions são funções que retornam objetos
// Vamos introduzir a palavra 'this' aos poucos e ver como ela funciona
// Dentro do objeto abaixo vamos criar algumas funções. Quando uma função está dentro de um objeto ela é chamada de método.
// Dentro dos métodos do objeto também posso receber parâmetros.
// Neste exemplo, meu método fala() está utilizando o valor do parâmetro. No próximo exemplo vamos fazer ele utilizar o valor da propriedade.

// Factory Functions são muito úteis quando queremos criar objetos gigantes com 100, 1000 linhas de código

function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        fala: function(assunto) {
            return `${nome} está falando ${assunto}`
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otávio')
console.log(p1, p1.fala('falando sobre JS'))