// Se quiséssemos, por exemplo, obter o nome completo da pessoa, tinhamos que fazer p1.nome, p1.sobrenome
// No nosso exemplo, vamos fazer um método que retorne o nome completo da pessoa

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        // Método que retorna nome completo da pessoa. Como só obtenho o valor, ele pode ser um Getter. Isso vai fazer o método fingir ser um atributo.
        get nomeCompleto() {
            return `${nome} ${sobrenome}`
        },

        fala(assunto) {
            return `${this.nome} fala ${assunto}`
        },
        altura: a,
        peso: p,

        // Getter - para obtermos apenas o valor de imc utilizando apenas a notação de atributo (.)
        get imc() { // Utilizando a palavra get, imc agora vai fingir que é um atributo do objeto
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }        
    }
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80)
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.nomeCompleto)
