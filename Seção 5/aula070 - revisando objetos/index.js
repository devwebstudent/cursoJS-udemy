// Um objeto literal é feito utilizando as chaves {}
// Um objeto possui um corpo, delimitado pelas chaves {}
// Um objeto é formado por um par: chave e valor -> nome: 'José'
// A chave(propriedade) é utilizada para acessar um valor dentro do objeto

const pessoa = {
    // Chave: valor
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

// Acessando essas chaves(propriedades) - notação de ponto
console.log(pessoa.nome) // Luiz
console.log(pessoa.sobrenome) // Otávio



// Outra forma de acessar chaves do objeto - notação de colchetes. A chave que queremos acessar vai entre aspas
// Em alguns casos é interessante utilizar a notação de colchetes, pq nesse caso posso colocar um valor dinâmico.
// Ex: suponha que em algum momento eu não saiba qual chave vou colocar aqui, pois isso vai vir de uma base de dados ou de alguma coisa que o usuário seleciona dentro do meu site. Se essa coisa vai vir dinâmica, não consigo utilizar a notação de ponto

const chave = 'nome'
console.log(pessoa[chave]) // Luiz -> acessando a chave dinamicamente
console.log(pessoa['sobrenome']) // Otávio


// Não tem como dizer qual é a melhor maneira de acessar o objeto. A única coisa que podemos falar é que se temos um objeto simples em que podemos acessar a chave pela notação de ponto, utilize a notação de ponto pois ela é mais intuitiva e mais simples de ser entendida por quem está olhando.