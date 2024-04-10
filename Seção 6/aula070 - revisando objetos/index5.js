const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 30;

pessoa1.falarNome = function() {
    return `${this.nome} está falando seu nome`
}

pessoa1.getDataNascimento = function() {    
    const dataAtual = new Date();
    let ano = dataAtual.getFullYear();
    return ano - this.idade;
}

// Utilizando o FOR IN para ver as chaves(propriedades) do meu objeto
for(let chave in pessoa1) {
    console.log(chave)
}

// Utilizando o FOR IN para ver os valores dessas chaves
for(let chave in pessoa1) {
    console.log(pessoa1[chave])
}