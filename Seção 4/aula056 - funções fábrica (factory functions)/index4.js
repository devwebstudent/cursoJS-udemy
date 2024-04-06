// Agora temos o método imc() que baseado na altura e peso das pessoas que eu criar temos o imc delas

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        altura: a,
        peso: p,

        fala(assunto) {
            return `${this.nome} fala ${assunto}`
        }, 


        imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}


const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80)
console.log(p1.nome)
console.log(p1.imc()) // Vai retornar o IMC de p1 // Resultado: 24.69



const p2 = criaPessoa('Maria', 'Joaquina', 1.60, 42)
console.log(p2.imc()) // Resultado: 16.41