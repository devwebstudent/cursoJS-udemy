// Remova apenas a propriedade "nome" do objeto
// Ou seja, tenho que retornar um objeto apenas com a propriedade "idade"
// Fazendo de 2 maneiras diferentes

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const idades = pessoas.map((objeto) => {
    delete objeto.nome // deletando a propriedade "nome" dos objetos
    return objeto
})

console.log(idades) 
// [{ idade: 62 }, { idade: 23 }, { idade: 55 }, { idade: 19 }, { idade: 32 }, { idade: 47 }]



// Ou podemos retornar um objeto novo contendo a propriedade "idade"
const idades2 = pessoas.map((objeto) => {
    return {idade: objeto.idade} // idade vai pegar o valor da propriedade idade do array original
})

console.log(idades2)
// [{ idade: 62 }, { idade: 23 }, { idade: 55 }, { idade: 19 }, { idade: 32 }, { idade: 47 }]