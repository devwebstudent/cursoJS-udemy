// Suponha que o atributo nome não exista dentro do nosso objeto. Podemos setar um valor padrão para esse nome.

const pessoa = {
    // nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const {nome = '', sobrenome, idade} = pessoa;
console.log(nome, sobrenome, idade) // Resultado: Não existe Miranda 30

// Obs.: mesmo se colocarmos o valor padrão, caso tenhamos o atributo nome dentro do nosso objeto, a variável nome vai assumir esse valor do atributo. Ex: Luiz