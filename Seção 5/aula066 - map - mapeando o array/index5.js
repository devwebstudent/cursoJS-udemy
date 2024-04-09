// Mais um exemplo:
// Adicione a propriedade "id" em cada objeto
// Note que ao adicionarmos "id" no array "comIds", o array "pessoas" também vai ser modificado e vai ter a propriedade "id" em seus objetos
// Isso acontece pois estamos trabalhando com objetos que são passados por referência, eles apontam pro mesmo lugar na memória

// Se não quero esse comportamento, devo criar um novo objeto para que o original também não seja alterado

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

// Vamos utilizar o índice de cada objeto como nosso ID
// Para que o array original não seja modificado, copiamos o valor do array original pra um novo array
// Aqui não vamos estar modificando o objeto original, apenas a cópia
const comIds = pessoas.map((objeto, indice) => {
    // Criando um novo objeto para que os originais não sejam alterados
    const newObj = {...objeto} // Copiando objetos originais com spread operator ...
    newObj.id = indice + 1 // Para não ter ID com 0 somamos +1
   
    return newObj // Retorna o objeto completo
})

console.log(pessoas) // Mostrando array original
console.log(comIds) // Vai retornar o array e os objetos com a propriedade id