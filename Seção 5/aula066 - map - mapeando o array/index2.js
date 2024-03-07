// Exemplo utilizando objetos com map()
// Vamos mapear cada objeto, e em vez de retornar o objeto inteiro, vamos retornar apenas o nome da pessoa

// Para cada elemento:
// Retorne apenas uma string com nome da pessoa

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

// Como estamos utilizando map(), ao invés de retornar um objeto, vai retornar um array com os nomes das pessoas
const nomes = pessoas.map((objeto) => {
    return objeto.nome // Vamos retornar apenas os nomes das pessoas
})

console.log(nomes) // [ 'Luiz', 'Maria', 'Eduardo', 'Letícia', 'Rosana', 'Wallace' ]