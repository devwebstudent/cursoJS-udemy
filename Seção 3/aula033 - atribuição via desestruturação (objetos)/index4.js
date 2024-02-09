// Modificando o nome da minha variável. Por exemplo: se eu não quiser que minha variável se chame 'nome'

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// nome da chave: <nome da variável> -> essa chave eu quero que você crie essa variável 'n'
// Abaixo estamos modificando o nome da nossa variável para 'n', que terá o valor de 'Luiz'
const {nome: n = '', sobrenome} = pessoa;
console.log(n) // Resultado: Luiz

// Podemos também pegar alguma coisa que está dentro do endereço
const {endereco} = pessoa;
console.log(endereco) // Nesse caso, ele vai pegar o objeto inteiro: { rua: 'Av Brasil', numero: 320 }