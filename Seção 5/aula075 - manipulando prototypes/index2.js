// Object.setPrototypeOf() 

// Vamos criar um objeto B e ao invés de __proto__ ser Object.prototype, quero que __proto__ seja o Objeto A.


const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype 
}

const objB = {
    chaveB: 'B'
    // __proto__: objA
}

// Função que modifica a propriedade __proto__ do Objeto B:
// Ela vai configurar o prototype do Objeto B
// Fica assim:
// Entre parenteses coloco: Objeto que vai ter prototype modificado e o Objeto que vai modificar esse prototype

Object.setPrototypeOf(objB, objA)

// Mesmo eu não tendo 'chaveA' dentro do Objeto B, vamos conseguir acessá-la pelo objB
console.log(objB.chaveA) // Resultado: A

// Fazendo isso, mudamos a cadeia do objeto B. Anteriormente faziamos 'objB' e em baixo aparecia prototype, que era o pai do objeto B.

// Agora, a cadeia fica: objB -> objA -> prototype

// O __proto__ do Objeto B agora é o Objeto A, que contém a propriedade chaveA, por isso conseguimos acessar o Objeto A pelo Objeto B.
// O __proto__ do Objeto A é o Object.prototype

//