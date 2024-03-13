// Como vimos nas aulas, podemos ter 2 tipos de funções que são moldes para criar novos objetos, ao invés de criar um objeto e ficar colocando coisas dentro dele.
// Esse moldes são: factory functions (funções fábrica) e constructor functions (funções construtoras) - cabe ao dev decidir qual utilizar no programa, vai de gosto.
// Também podemos utilizar classes para criar novos objetos

// Com meu getter temos uma propriedade nova, que na verdade é um método, que vai fingir ser uma propriedade desse objeto



// Utilizando Factory Function para criar objetos
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,

        // Esse método vai simular que ele é um atributo
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otávio')
console.log(p1.nomeCompleto) // Luiz Otávio