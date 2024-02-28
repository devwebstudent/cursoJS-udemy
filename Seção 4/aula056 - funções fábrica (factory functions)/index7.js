// E agora se quiséssemos setar um valor pro nome completo
// O Setter serve para settar ou modificar algum atributo dentro do objeto

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        // Getter - Método que retorna nome completo da pessoa. Como só obtenho o valor, ele pode ser um Getter. Isso vai fazer o método fingir ser um atributo.
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter - Como vamos receber o valor que foi enviado na linha 37 pra cá?
        // Aqui estou modificando o valor do nome
        set nomeCompleto(valor) {
            valor = valor.split(' ') // A cada espaço o nome completo vai ser dividido. Vai me retornar um array -> [ 'Maria', 'Oliveira', 'Silva' ]
            this.nome = valor.shift() // Vai retornar esse primeiro valor para a variável nome e remover esse valor do array
            // O nome já vai ser mudado para o primeiro valor do elemento, que está sendo removido do array
           
            this.sobrenome = valor.join(' ') // Pegando o resto (Oliveira e Silva) e juntando eles numa string e separando por um espaço
        },

        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}.`
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


p1.nomeCompleto = 'Maria Oliveira Silva' // Como vamos receber esse valor no nosso Setter? Como ele está fingindo ser um atributo, esse valor vai automaticamente pro nosso Setter

console.log(p1.nome) // Maria
console.log(p1.sobrenome) // Oliveira Silva
console.log(p1.fala())


// E se quisermos extrair o primeiro nome, se temos o valor de nome completo nesse valor (ver linha 15)
// Agora vamos pegar o resto do array (Oliveira e Silva), juntar isso numa string e separar por espaço (linha 20)