// Object.defineProperty e defineProperties é bem mais verboso do que só definir as propriedades e seus respectivos valores, mas temos muito mais controle sobre o que pode ou não ser feito com determinada chave(propriedade).
// Se for algo mais sensível, é mais sensato utilizar uma dessas funções.

// Dependendo das configurações, vamos poder ou não alterar os valores, vamos poder ou não apagar as propriedades, a propriedade vai ou não aparecer, etc.

// Agora vamos ver Object.defineProperties, que é muito similar ao defineProperty
// Em defineProperties vai ser um pouco diferente

function Produto(nome, preco, estoque) {
    // Aqui recebemos o objeto, o nome da propriedade, pois é só uma propriedade, e um objeto com as configurações
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: true, // aqui posso alterar o valor da propriedade (writable: true)
        configurable: false // não posso reconfigurar a propriedade
    })

    // Aqui vamos receber um objeto e vamos mandar um objeto gigante chamado PropertyDescriptorMap e dentro dele vamos falar que queremos a chave nome. Vamos criar a chave e essa chave vai conter um objeto onde vão todas as configurações.
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome, // o valor vai ser o que vier do parâmetro
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco, // valor vindo do parâmetro
            writable: true,
            configurable: true
        }
    })

}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1) // Produto { nome: 'Camiseta', preco: 20, estoque: 5000 }


// Iterando as chaves do objeto - vai ser similar ao Object.keys(p1)
for (let chave in p1) {
    console.log(chave) // Resultado: nome, preco, estoque
}