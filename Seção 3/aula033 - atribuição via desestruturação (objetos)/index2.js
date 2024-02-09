// Atribuição via desestruturação (objetos)

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação - estou passando um objeto e falando "extrai desse objeto o nome, sobrenome e idade". Daí ele já cria uma variável chamada nome, sobrenome e idade.
// Nas chaves vamos colocar o que queremos extrair do objeto. Fizemos a desestruturação de 3 variáveis.
const {nome, sobrenome, idade} = pessoa
console.log(nome, sobrenome, idade) // Resultado: Luiz Miranda 30