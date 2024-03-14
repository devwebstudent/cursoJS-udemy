// Na factory function, podemos fazer getter e setter direto no objeto
// Relembrando:

// Get -> obtem o valor
// Set -> seta o valor, modifica o valor

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },

        set nome(valor) {
            valor = valor.replace('coisa', '') // substituimos o 'coisa' por nada
            nome = valor;
        }
    }
}


const p2 = criaProduto('Camiseta')
p2.nome = 'Qualquer coisa'

console.log(p2.nome) // Resultado: Qualquer