// O que vimos com os arrays, também funciona com os objetos

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

let b = a; // b está apontando pro mesmo valor na memória do que a

console.log(b) // Ao mandarmos mostrar, vemos que b tem o mesmo valor de a // Resultado: { nome: 'Luiz', sobrenome: 'Otávio' }

a.nome = 'João'
console.log(a, b) // Repare que b está com o mesmo valor de a, mesmo nós termos alterado apenas a // Resultado: { nome: 'João', sobrenome: 'Otávio' } { nome: 'João', sobrenome: 'Otávio' }



// SE QUISERMOS COPIAR O VALOR DE A SEM QUE OS 2 APONTEM PARA O MESMO LUGAR NA MEMÓRIA, FAZEMOS A MESMA COISA QUE FIZEMOS COM OS ARRAYS:

b = {...a}; // Copiamos o valor de a. Agora b é totalmente independente de a
a.nome = 'Carlos'; // Modificamos a
console.log(a); // Resultado: { nome: 'Carlos', sobrenome: 'Otávio' }
console.log(b); // Note que b não vai ser alterado - Resultado: { nome: 'João', sobrenome: 'Otávio' } - b vai deixar de apontar para o mesmo lugar na memória que a