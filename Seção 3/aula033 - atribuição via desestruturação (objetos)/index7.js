// Utilizando operador de rest (...) para pegar o resto das propriedades

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const {nome, sobrenome, ...resto} = pessoa
console.log(nome, sobrenome, resto) // Temos tudo, exceto o nome e sobrenome, pois nome e sobrenome já foram extraídos. Nesse caso, estamos extraindo o resto, o que sobrou.
// Resultado: 
// Luiz Miranda
// {  idade: 30,  endereco: { rua: 'Av Brasil', numero: 320 } }