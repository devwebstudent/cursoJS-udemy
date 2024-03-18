// Não é recomendável utilizarmos a propriedade __proto__, fizemos apenas como exemplo.
// Não mexa na propriedade __proto__, pois podemos ter vários problemas de performance no sistema.

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

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)


// Se quisermos acessar o __proto__ de um Objeto, utilizamos a seguinte função:
// Não vai aparecer o resultado no node.js, só podemos ver no navegador.
Object.getPrototypeOf(objC)

// É claramente um getter e setter aqui:
// Object.setPrototypeOf() -> seta o prototype, configura o prototype
// Object.getPrototypeOf() -> mostra o prototype do objeto