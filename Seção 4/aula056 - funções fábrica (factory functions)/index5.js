// O imc do exemplo anterior poderia ser como nome, sobrenome, como se fosse uma variável.
// Para fazermos isso, utilizamos a palavra 'get'
// Ao colocarmos get imc(), imc vai fingir ser uma propriedade do nosso objeto
// A palavra 'get' vai fazer eu obter o valor de imc

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        altura: a,
        peso: p,

        fala(assunto) {
            return `${this.nome} fala ${assunto}`
        }, 
        
        // Getter - para obtermos apenas o valor de imc utilizando a notação de ponto (.)
        get imc() { // Utilizando a palavra get, imc agora vai fingir que é uma propriedade do objeto
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}


const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80)
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.imc) // Vai retornar o IMC de p1 // Resultado: 24.69