// Object.freeze() -> trava o objeto, fazendo com que o objeto não possa mais ser modificado

// Se quisermos fazer isso em uma, duas ou 10 propriedades do objeto e deixar o resto do objeto normal, utilizamos:

// Object.defineProperty() ou Object.defineProperties()

// Vamos criar uma função construtora que cria um produto
// Imagina que queremos que a propriedade estoque fique travada e não possa ser alterada
// Queremos que estoque fique privado
// Queremos alterar as propriedades da propriedade estoque, quero que ela não seja exibida


// Em qual objeto quero mexer? Dentro da função construtora sabemos que this referencia o objeto, então posso mexer no objeto this. Em seguida, indicamos qual propriedade queremos trabalhar.
// Agora temos que enviar um property descriptor, que é um objeto e esse objeto pode receber várias coisas.
// Quero que meu estoque seja enumerable, quero que ele seja exibido assim como as outras propriedades. Ao fazer isso, estoque vai ficar com o valor 'undefined'. Onde está o valor de estoque? Vamos pegar esse valor que estou recebendo do parâmetro e fazer -> value: estoque

function Produto(nome, preco, estoque) {
    this.nome = nome; // Variável púlbica, podemos acessar de fora do objeto
    this.preco = preco; // Variável pública    

    // Quando colocamos configurable como 'true', quer dizer que podemos reconfigurar a propriedade.
    // Quando writable é 'false', o valor vai continuar como 3 e não vai ser alterado para 5000. writable: false -> a propriedade não pode ser alterada
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,        
        writable: true, // aqui posso alterar o valor da propriedade (writable: true)
        configurable: false // não posso reconfigurar a propriedade
    })

    // Reconfigurando a propriedade criando outra. Aqui writable é 'true' e configurable é 'false'.
    // Veja que redefinimos as configurações da propriedade estoque. Poderíamos também alterar o valor.
    // Como aqui estamos reconfigurando, se executo vai aparecer estoque como 5000, pois writable está como 'true'. 
    // Isso acontece pois acima foi permitido que a propriedade estoque fosse reconfigurada (configurable: true)
    // Se acima configurable fosse 'false', não poderíamos fazer o que está aqui em baixo, ia retornar um erro.
    
    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true,
    //     value: estoque,        
    //     writable: true,
    //     configurable: false
    // })
}

const p1 = new Produto('Camiseta', 20, 3)

// Ao alterarmos o valor do estoque, estoque vai ficar com valor de 5000, pois lá em cima a propriedade está como writable: true
p1.estoque = 5000

// Ao tentarmos deletar a propriedade estoque, não vai acontecer nada, pois configurable está como configurable: false. Caso confirable: true, a propriedade estoque seria apagada.
delete p1.estoque // propriedade estoque não vai ser deletada, pois configurable: false

console.log(p1) // Produto { nome: 'Camiseta', preco: 20, estoque: 5000 }


// enumerable -> true: mostra a propriedade // false: não mostra a propriedade
// value -> valor da propriedade
// writable -> controla se o valor pode ou não ser alterado -> true: pode, false: não pode
// configurable -> controla se a propriedade pode ou não ser reconfigurada -> true: pode configurar, false: não pode configurar
// configurable como false não permite apagar a propriedade e não permite reconfigurar