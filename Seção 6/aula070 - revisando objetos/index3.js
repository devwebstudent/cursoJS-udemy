// Se queremos apagar determinada chave do nosso objeto - delete pessoa1.nome

// Deletando a chave(propriedade) nome do nosso objeto -> delete pessoa1.nome
const pessoa1 = new Object();
pessoa1.nome = 'Luiz'
pessoa1.sobrenome = 'Otávio'

console.log(pessoa1)

delete pessoa1.nome
console.log(pessoa1) // { sobrenome: 'Otávio' }