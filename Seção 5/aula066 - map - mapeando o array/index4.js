// Simplificando nossa arrow function
// Para que na hora de simplificar o VS Code não considere as chaves do objeto como as chaves da arrow function, envolva o objeto que vai retornar entre parênteses ()
// Envolvemos entre parenteses para que se torne uma expressão e agora vai funcionar normalmente.

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

// Envolva o objeto que vai retornar entre parenteses ()
const idades2 = pessoas.map(objeto => ({idade: objeto.idade}))
console.log(idades2)
// [{ idade: 62 }, { idade: 23 }, { idade: 55 }, { idade: 19 }, { idade: 32 }, { idade: 47 }]