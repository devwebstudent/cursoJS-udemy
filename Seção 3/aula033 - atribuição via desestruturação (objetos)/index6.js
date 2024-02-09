// Se eu quiser pegar também o objeto completo do endereco, além da rua e numero, fazemos:

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const {endereco: {rua, numero}, // Extraimos do endereco a rua e o numero
endereco} // Extraimos o endereco completo
= pessoa;
console.log(rua, numero, endereco); // Resultado: Av Brasil 320 { rua: 'Av Brasil', numero: 320 }