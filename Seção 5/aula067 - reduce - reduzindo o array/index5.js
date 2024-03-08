// Retorne a pessoa mais velha
// Temos que retornar o elemento em que a pessoa é a mais velha

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 }
];


// Temos que retornar Rosana, que tem 64 anos
// Se não mandarmos um valor inicial para o acumulador, o valor inicial do acumulador vai ser o primeiro elemento
// Queremos que nosso acumulador seja o primeiro elemento do array e já podemos fazer nossa comparação e checar: se a idade do acumulador é maior que a idade do valor?
// Se for maior, o acumulador ganha, dai continua checando: o acumulador é maior que a idade do Eduardo? Se for, o acumulador ganha, se não o valor ganha
// E assim por diante, fazendo essa checagem a cada iteração do laço
const maisVelha = pessoas.reduce(function (acumulador, valor) {
    // Acumulador aqui vai ser o primeiro elemento do array, pois não mandamos valor inicial para ele
    console.log(acumulador, valor) 

    
    // Retornando o acumulador, vamos retornar o objeto inteiro, não a propriedade idade.
    // Estamos checando uma propriedade do objeto e outra propriedade do objeto, daí temos que retornar o objeto, não a propriedade.
    // Se chegar no primeiro return, ele nunca vai chegar na linha de baixo, então não preciso de um else. Se a idade do acumulador não for maior que a idade do valor, o primeiro return não vai ser executado.
    // Daí já retorno o valor, pq sei que agora o valor é maior que o acumulador.

    // Aqui estamos perguntando: a idade do primeiro é maior que o segundo? Sim, então vai retornar o acumulador, que é o primeiro objeto
    // Se retorno o acumulador, o acumulador continua sendo o primeiro objeto.
    if (acumulador.idade > valor.idade) return acumulador

    // Se a idade do acumulador não for maior que a idade do valor, vai retornar o valor, que no caso vai ser do objeto contendo Rosana
    // Daí o acumulador vai passar a ser o valor
    // Quem for mais velho termina sendo o acumulador
    return valor
})

console.log(maisVelha) // { nome: 'Rosana', idade: 64 }