// Poderíamos criar uma cadeia bem longa, tipo do Objeto A até o Objeto Z. Se um for tendo o outro como prototype, no Objeto Z ainda vamos conseguir acessar a propriedade chaveA, métodos, etc.

const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype 
}

const objB = {
    chaveB: 'B'
    // __proto__: objA
}

const objC = new Object();
objC.chaveC = 'C'
// __proto__: objB


// Aqui continuamos a cadeia
Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB) // -> o prototype do Objeto C é o Objeto B

// Conseguimos acessar a propriedade chaveA e chaveB pelo Objeto C
console.log(objC.chaveA) // Resultado: A
console.log(objC.chaveB) // Resultado: B
console.log(objC.chaveC) // Resultado: C


// Resumindo:
// O __proto__ do Objeto C é o Objeto B. 
// O __proto__ do Objeto B é o Objeto A.
// O __proto__ do Objeto A é Object.prototype(pai)


// Isso é muito poderoso, pois podemos reaproveitar códigos que estão em outros objetos.