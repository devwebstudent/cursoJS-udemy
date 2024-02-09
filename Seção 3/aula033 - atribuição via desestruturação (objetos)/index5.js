// Se quisermos pegar algo em específico dentro desse objeto endereco, fazemos:

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};


// Pegando coisas de dentro do objeto endereco
// Fazemos objeto: {o que eu quero extrair do objeto}
// Fazemos endereco: {rua, numero}
// Nesse caso, não temos mais a variável endereco, só as variáveis 'rua' e 'numero'
const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero); // Resultado: Av Brasil 320